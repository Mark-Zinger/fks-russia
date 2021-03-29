module.exports = (params) => {
    const {fullname}  = params;
    return (
        `
        <h1>Добро пожаловать, ${fullname}</h1>
        <p>Вам необходимо подтвердить адресс электронной почты</p>
        <a href="http://localhost:3000/">Подтеведить</a>
        `
    )
}
