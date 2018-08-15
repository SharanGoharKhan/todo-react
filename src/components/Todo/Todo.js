import React from 'react'
import classes from './Todo.css'
const todo = (props) => {
    return (
    <div className={classes.Todo}>
        <div className={classes.main__heading}>
            <h1>WHAT DO YOU WANT TO DO TODAY</h1>
            <input type="text"/>
            <h1 className={classes.question_mark}>?</h1>
        </div>
        <div className={classes.Todo__sub}>
            <div className={classes.overlay__main}>
            </div>
        </div>
    </div>
    )
}
export default todo;