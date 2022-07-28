import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';
/*import { LoginMenu } from './api-authorization/LoginMenu';*/
import styles from '../styles/NavMenu.module.css';

function NavMenu() {

    const [toggleNav, setToggleNav] = useState(true);

    const toggleNavbar = ()=> {
        if (toggleNav) {
            setToggleNav(false);
        } else {
            setToggleNav(true);
        }
    }

    return (
        <header>
            <Navbar className={`navbar-expand-sm navbar-toggleable-sm ng-white border-bottom ${styles.boxShadow} mb-3`} container light>
                <NavbarBrand className={styles.navbarBrand} href="/">PocReactJs</NavbarBrand>
                <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!toggleNav} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <Link className={`${styles.textDark} ${styles.navLink} text-dark`} href="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={`${styles.textDark} ${styles.navLink}`} href="/counter">Counter</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={`${styles.textDark} ${styles.navLink}`} href="/fetch-data">Fetch data</Link>
                        </NavItem>
                        {/*<LoginMenu>*/}
                        {/*</LoginMenu>*/}
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );

}

export default NavMenu;
