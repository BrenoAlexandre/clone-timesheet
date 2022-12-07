import React from 'react';
import style from './style.module.scss';
import Logo from '../../assets/Logo.svg';
import LogOut from '../../assets/LogOut.svg';

const user = {
  name: 'Breno Alexandre',
};

const Header: React.FunctionComponent = () => {
  return (
    <header className={style.header}>
      <div className={style.header__start}>
        <img src={Logo} />
        <span>Planilha</span>
      </div>
      <div className={style.header__end}>
        <span>Olá,</span>
        <p>{user.name}.</p>
        <h6>Versão 10.0.0</h6>
        <img src={LogOut} />
      </div>
    </header>
  );
};

export default Header;
