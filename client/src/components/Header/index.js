import React from 'react';
import HeaderAuth from '../HeaderAuth'




export default (props) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">Логотип</div>
                <div className="header__menu">
                    <HeaderMenuLink/>
                </div>
                <HeaderAuth/>
            </div>
            
        </div>
    )
}

const HeaderMenuLink = () => {
    const links = ['НОВОСТИ', 'БИРЖА','РЕЙТИНГИ','НОВОСТИ','ВИДЕО'];

    const HeaderLink = ({href,title}) => <a className="header__menu-link" {...{href}}>{title}</a>;

    return (
        <div className="header__menu">
            {
                links.map((el)=><HeaderLink href="/" title={el}/>)
            }
        </div>
    )
}


