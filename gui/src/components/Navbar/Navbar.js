import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import style from'./style.module.css';
import logo from './logo-tipaw.svg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    contact: {
        flexGrow: 1,
    },
});

class Navbar extends Component {
    render(){
        const { classes } = this.props;
        return(
            <AppBar position="static">
                <Toolbar className={style.navbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  href="/">
                        <img  src={logo} alt="Tipaw logo"/>
                    </IconButton>
                    <a href="/contact" className={`${style.link}`}>
                        <span className={`${style.contact}`} >
                          Contact
                        </span>
                    </a>
                </Toolbar>
            </AppBar>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Navbar);