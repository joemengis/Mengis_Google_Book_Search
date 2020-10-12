import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { BooksList, BooksInsert, BooksUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/books/create" exact component={BooksInsert} />
                <Route
                    path="/books/update/:id"
                    exact
                    component={BooksUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App