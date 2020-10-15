import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../features/images/Mengis_Books_Logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://sambarros.com">
                <a href="/books/search">
                <img src={logo} width="50" height="50" alt="sambarros.com" />
                </a>
            </Wrapper>
        )
    }
}

export default Logo