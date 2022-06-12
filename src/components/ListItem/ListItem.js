import React from 'react'
import classes from './ListItem.module.css'
import { Link } from 'react-router-dom'

function ListItem(props) {
    return (
            <Link to={props.path} className={classes.container}>
                <button className={classes.link}>
                    {props.children}
                </button>
            </Link>
    )
}

export default ListItem