import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/books/list" className="navbar-brand">
                    Joseph Mengis' Book List
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/books/list" className="nav-link">
                                My Books
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/search" className="nav-link">
                                Search Book
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links