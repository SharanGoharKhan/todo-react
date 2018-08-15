import React, { Component } from 'react'
// import classes from './Layout.css'
import Aux from '../Aux/Aux'
import TodoList from '../../containers/TodoList/TodoList'
import NavigationComponent from '../../components/Navigation/Navigation'

class Layout extends Component {
    render() {
        return (
        <Aux>
            <NavigationComponent />
            <TodoList />
        </Aux>
        )
    }
}
export default Layout