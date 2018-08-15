import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import TodoList from './containers/TodoList/TodoList'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={TodoList} />
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div>
       <Layout>
         {routes}
       </Layout>
      </div>
    );
  }
}

export default withRouter(App);
