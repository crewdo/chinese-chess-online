import React from 'react'

import { BrowserRouter as Router, Route }  from 'react-router-dom'

import {Hall} from './components'

const App = () => (
    <Router>
        <Route path='/' exact component={Hall} />
    </Router>
)

export default App