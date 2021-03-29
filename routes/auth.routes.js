const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const { UserAuth } = require('../models');
const mailSender = require('../src/sendmail');
const router = Router();

// /auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').normalizeEmail().isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // res.status(201).json({ ...req.body })

    const {email, password,username,fullname} = req.body

    
    let [candidate] = await UserAuth.findAll({ where: {email} });
    
    if (candidate) {
      return res.status(400).json({ message: 'Адрес Электронной почты уже используется другим пользователем' })
    }
    if(!candidate) [candidate] = await UserAuth.findAll({ where: {username} });
    if(candidate) {
      return res.status(400).json({ message: 'Пользователь с таким логином уже существует' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await UserAuth.create({ 
      ...req.body, 
      password: hashedPassword,
      role: 'user',
      createAt: new Date()
    });

    user.dataValues.token = jwt.sign(
      { userId: user.dataValues.id },
      config.get('jwtSecret'),
      { expiresIn: '1m' }
    )

    // await mailSender({email,fullname});
  
    res.status(201).json({ ...user.dataValues });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', error: e })
  }
})

// /auth/login
router.post(
  '/login',
  [
    // check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    // check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректный данные при входе в систему'
      })
    }

    const {email, password} = req.body
    console.log(email, password);

    let [user] = await UserAuth.findAll({ where: {email} })
    
    if(!user) [user] = await UserAuth.findAll({ where: {username: email}})

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.json({ 
      token, 
      userId: user.id,
      email: user.email, 
      username: user.username,
      avatar: user.avatar
    })

  } catch ({message}) {
    res.status(500).json({ message })
  }
})

router.post(
  '/token',
  [
    check('token', 'Отсутствует токен').exists()
  ],
  async (req, res) => {
  try {
    // const errors = validationResult(req)

    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     errors: errors.array(),
    //     message: 'Некорректный данные при входе в систему'
    //   })
    // }

    const {token} = req.body
    console.log(token);
    let user = null;
    


    const verifyToken = jwt.verify( token, config.get('jwtSecret'))
    
    

    if(verifyToken.userId) {
      [user] = await UserAuth.findAll({ where: {id: verifyToken.userId} })
    }
    res.json(user)
    console.log(userId, user);
    if(user) {
      res.json(user)
    } else {
      res.status(403).json({messege: 'invalid Token'})
    }
  } catch (e) {
    res.status(500).json({e})
    console.log(e);
  }
})


module.exports = router
