import React from 'react'

import { BrowserRouter as Router, Route }  from 'react-router-dom'
import {Register} from './components'
import {Play} from './components'
import {RoomList} from './components'

const App = () => (
    <Router>
        <Route path='/' exact component={Register} />
        <Route path='/rooms' exact component={RoomList} />
        <Route path='/play' exact component={Play} />
    </Router>
)

export default App