import React from "react";
import './Header.css';

function Header ({action}){
    return(
        <header className={ action?'color':'' }>
            <div className= "logo">
                <h1 className={ action?'color':'' } >LOGO</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#SobreNos">Sobre Nós</a></li>
                    <li><a href="#Produtos">Produtos</a></li>
                    <li><a href="#Contato">Contato</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;