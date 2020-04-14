import React, { Component } from 'react';
import BNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from'./style.module.css';
import logo from './logo-tipaw.svg';
class Navbar extends Component {
    render(){
        return(
            <BNavbar bg="light" expand="lg" className={styles.navbar}>
                <Nav.Link className={styles.logo} href="/">
                    <img  src={logo} alt="Tipaw logo"/> Tipaw
                </Nav.Link>
                <Nav.Link className={styles.contact} href="/contact">
                    Contact
                </Nav.Link>
            </BNavbar>
        );
    }
}
export default Navbar;