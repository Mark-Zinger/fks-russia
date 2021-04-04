import React from 'react';
import AuthBar from '../AuthBar';
import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo';
import HeaderMenuLinks from './HeaderMenuLinks';
import { motion } from 'framer-motion';




export default (props) => {
    return (
        <motion.div className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">
                    <HeaderLogo/>
                </Link>
                <div className="header__menu">
                    <HeaderMenuLinks/>
                    {/* <HeaderTournament/> */}
                </div>
                <AuthBar/>
            </div>
            
        </motion.div>
    )
}





