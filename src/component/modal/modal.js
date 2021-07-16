import React, { useState } from 'react';
import Book from '../../lib/books/book';
import './modal.css';

function Modal(props) {

    const text = props.text;
    console.log("TE", text);
    const books = props.data;
    console.log("BBB", books);

    const renderModal = () => {
        return (
            //setOpenModal(!openModal),
            <div>
                {books ? books.filter(book => book.volumeInfo.title.toLowerCase().
                    includes(text.toLowerCase())).slice(0, 5).map((book, index, i) => (

                        <div key={book.id} className="books-div">
                            <Book title={book.volumeInfo.title} author={book.volumeInfo.authors} />
                            {(index !== i.length - 1) && <hr className="dividerLine" />}
                            {console.log("BK length", book.volumeInfo.length)}
                            {console.log("IND", i.length, index)}
                            {/* <hr className="dividerLine" /> */}
                        </div>
                    )) : "no match"}
            </div>
            //setOpenModal(false)

        );
    };


    return (
        // <div className="container">

        <div className={`${text.length > 3 ? "mainDiv" : null}`}>
            {text && renderModal()}

        </div>
        // </div>
    );
}

export default Modal;
