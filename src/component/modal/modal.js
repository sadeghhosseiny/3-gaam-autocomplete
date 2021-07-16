import React, { useState } from 'react';
import Book from '../../lib/books/book';
import './modal.css';

function Modal(props) {

    const text = props.text;
    console.log("TE", text);
    const books = props.data;
    console.log("BBB", books);

    const filterdNames = books.filter(book => (
        book.volumeInfo.title.toLowerCase().includes(text.toLowerCase())
    ));

    const renderModal = () => {

        return (
            <div>
                {books ? books.filter(book => book.volumeInfo.title.toLowerCase().
                    includes(text.toLowerCase())).slice(0, 5).map((book, index, i) => {

                        let patt = new RegExp(text.toLowerCase, "gi");
                        let result = book.volumeInfo.title.matchAll(patt);
                        for (let res of result) {
                            console.log("hi");
                            console.log(res);
                        }
                        let string = book.volumeInfo.title.substr(
                            0,
                            book.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase())
                        );
                        let endString = book.volumeInfo.title.substr(
                            book.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase()) +
                            text.length
                        );
                        let highlightedText = book.volumeInfo.title.substr(
                            book.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase()),
                            text.length
                        );

                        return (
                            <div key={book.id} className="books-div">

                                <Book string={string} highlightedText={highlightedText} endString={endString} author={book.volumeInfo.authors} />

                                {(index !== i.length - 1) && <hr className="dividerLine" />}
                            </div>
                        );
                    }) : "no match"}

            </div>
        );
    };


    return (
        // <div className="container">

        <div className={`${text.length > 3 ? "mainDiv" : null}`}>
            {text && renderModal()}
            {/* {text ? (
                <ul className="lookup-results">
                    {filterdNames.map((value) => {
                        let patt = new RegExp(text.toLowerCase, "gi");
                        let result = value.volumeInfo.title.matchAll(patt);
                        for (let res of result) {
                            console.log("hi");
                            console.log(res);
                        }
                        let string = value.volumeInfo.title.substr(
                            0,
                            value.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase())
                        );
                        let endString = value.volumeInfo.title.substr(
                            value.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase()) +
                            text.length
                        );
                        let highlightedText = value.volumeInfo.title.substr(
                            value.volumeInfo.title.toLowerCase().indexOf(text.toLowerCase()),
                            text.length
                        );
                        return (
                            <li key={value.volumeInfo.title}>
                                {string}
                                <span style={{ "background-color": "#FFFF00" }}>
                                    {highlightedText}
                                </span>
                                {endString}
                            </li>
                        );
                    })}
                </ul>
            ) : null} */}

        </div>
        // </div>
    );
}

export default Modal;
