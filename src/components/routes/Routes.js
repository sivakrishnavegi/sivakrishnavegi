import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Main from '../Main/Main'
import socialMedia from '../socialMedia/socialMedia'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/socialMedia' component={socialMedia} />
                   
                <Route
          render={function() {
            return <h1>Not Found 404</h1>;
          }} 
        />

            </Switch>
        </div>
    )
}

export default Routes
