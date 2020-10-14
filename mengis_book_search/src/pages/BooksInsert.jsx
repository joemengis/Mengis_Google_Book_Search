import React, { Component } from 'react';  
import api from '../api';

import styled from 'styled-components'
import "react-table-6/react-table.css" 

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`



class BooksInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            imageURL: null,
            authors: '',
            description: '',
            books: []
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value

        this.setState({ title });
        api.bookSearch(title).then(books => {
            console.log(books.data.items)
            this.setState({ books: books.data.items })
        })
    }

    handleChangeInputAuthor = async event => {
        const authors = event.target.validity.valid
            ? event.target.value
            : this.state.authors

        this.setState({ authors })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleIncludeBook = async () => {
        const { title, authors, description } = this.state
        const arrayDescription = description.split('/')
        const payload = { title, authors, description: arrayDescription }

        await api.insertBook(payload).then(res => {
            window.alert(`Book inserted successfully`)
            this.setState({
                title: '',
                authors: '',
                description: '',
            })
        })
    }

    saveBook = (bookId) => {
        const { books } = this.state;
        const book = books.find(book => book.id === bookId)
        api.insertBook({
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            link: book.volumeInfo.link,
            imageURL: book.volumeInfo?.imageLinks?.thumbnail,
            author: book.volumeInfo.authors
        })

    }
    render() {
        const { title, books } = this.state
        console.log('Searched books', books);

      

        return (
            <Wrapper>
                <Title>Search Books</Title>

                <Label>Enter a Title or Author: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />
               
                {books.map(book => (
                    <div key={book.id}>
                        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={"thank you"} />
                        <br/>
                        <a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a>
                        <p>{book.volumeInfo.authors}</p>
                        <p>{book.volumeInfo.description}</p>
                        <Button onClick={() => this.saveBook(book.id)}>Save</Button>
                    </div>
                ))}
            </Wrapper>
        )
    }
}

export default BooksInsert