import React from 'react'
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logo from "../images/logo.svg"
import measering from '../images/measering.svg';
import calculation from '../images/calculation.svg';

function Nav() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
        <div className={classes.buttons}>
            <button className={classes.btnReq}>
                <img src={measering} alt="" />
                <span>Make request</span>
            </button>
            <button className={classes.btnCalc}>
                <img src={calculation} alt="" />
                <span>Calculation</span>
            </button>
        </div>
    </header>
  )
}

export default Nav