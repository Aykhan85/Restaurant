import Link from "next/link";
import { NavLink } from "./NavLink/NavLink";
import style from '../styles/Header.module.css'
import { useRef } from "react";
import SelectBox from "./SelectBox";

export default function Header() {

    return (
        <header>
            <nav className={style.nav}>
                <NavLink href='/'>
                    <h1>Foody <span className={style.punkt}>.</span></h1>
                </NavLink>
                <ul className={style.ul}>
                    <li className={style.li}><NavLink href="/" exact>Home</NavLink></li>
                    <li className={style.li}><NavLink href="/restaurant" >Restaurants</NavLink></li>
                    <li className={style.li}><NavLink href="/about">About</NavLink></li>
                    <li className={style.li}><NavLink href="/howit">How it works</NavLink></li>
                    <li className={style.li}><NavLink href="/faq">FAQ's</NavLink></li>
                </ul>
                <SelectBox />
            </nav>
        </header>
    )
}