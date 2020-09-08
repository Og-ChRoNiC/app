import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Account from './account'
import Bookmarklet from './bookmarklet'
import My from './my'
import Settings from './settings'

import NotFound from './404'

const Router = process.env.APP_TARGET == 'default' ?
    BrowserRouter :
    HashRouter

export default ()=>(
    <Router>
        <Switch>
            <Route path='/account' component={Account} />
            <Route path='/bookmarklet' component={Bookmarklet} />
            <Route path='/my/:_id(-?\d+)/:search?' component={My} />
            <Route path='/settings' component={Settings} />

            {/* Redirects */}
            <Route path='/app/duplicates'><Redirect to='/settings/duplicates' /></Route>
            <Route path='/app/tags'><Redirect to='/settings/tags' /></Route>
            <Route path='/app/libroken'><Redirect to='/settings/libroken' /></Route>
            
            <Route component={NotFound} />
        </Switch>
    </Router>
)