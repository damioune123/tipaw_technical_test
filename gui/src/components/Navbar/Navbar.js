import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

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
                    <Link to="/">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
                            <img  src={logo} alt="Tipaw logo"/>
                        </IconButton>
                    </Link>
                    <Link to="/contact" className={`${style.link}`}>
                        <span className={`${style.contact}`} >
                          Contact
                        </span>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Navbar);