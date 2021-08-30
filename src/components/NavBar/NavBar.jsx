import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom";
import { CHARACTERS_ROUT_PAGE, EPISODES_ROUT_PAGE, LOCATIONS_ROUT_PAGE, MY_WATCH_LIST_ROUT } from "../../utils/consts";
import logo from "../../img/logo.png"
import styles from "./NavBar.module.css"

const NavBar = () => {

   return (
      <Navbar bg="dark" variant="dark" fixed="top" >
         <Container>
            <Link to={CHARACTERS_ROUT_PAGE}>
               <img className={styles.logo} src={logo} alt='logo' />
            </Link>
            <Nav className="ml-auto">
               <NavLink className={styles.link} to={CHARACTERS_ROUT_PAGE}>Characters</NavLink>
               <NavLink className={styles.link} to={LOCATIONS_ROUT_PAGE}>Locations</NavLink>
               <NavLink className={styles.link} to={EPISODES_ROUT_PAGE}>Episodes</NavLink>
               <NavLink className={styles.link} to={MY_WATCH_LIST_ROUT}>Watch-later</NavLink>
            </Nav>
         </Container>
      </Navbar>
   );

};

export default NavBar;