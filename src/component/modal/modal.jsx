import React from 'react';
import Book from '../../lib/books';
import './modal.css';

function Modal(props) {

    const text = props.text;
    // console.log("TE", text);
    const books = props.data;
    // console.log("BBB", books);

    const renderModal = () => {

        return (
            <div>
                {books ? books.filter(book => book.volumeInfo.title?.toLowerCase().includes(text)).slice(0, 5).map((book, index, i) => {

                    let patt = new RegExp(text.toLowerCase, "gi");
                    let result = book.volumeInfo.title.matchAll(patt);
                    for (let res of result) {
                        console.log("hi");
                        console.log(res);
                    }
                    let string = book.volumeInfo.title.substr(
                        0,
                        book.volumeInfo.title.toLowerCase()?.indexOf(text)
                    );
                    let endString = book.volumeInfo.title.substr(
                        book.volumeInfo.title.toLowerCase()?.indexOf(text) +
                        text.length
                    );
                    let highlightedText = book.volumeInfo.title.substr(
                        book.volumeInfo.title.toLowerCase()?.indexOf(text),
                        text.length
                    );

                    return (
                        <div key={book.id} className="books-div">

                            <Book string={string} highlightedText={highlightedText} endString={endString} author={book.volumeInfo.authors} />

                            {(index !== i.length - 1) && <hr className="dividerLine" />}
                        </div>
                    );
                }) : <p>

                    no match
                </p>
                }

            </div>
        );
    };


    return (
        // <div className="container">

        <div className={`${text.length > 0 ? "mainDiv" : null}`}>
            {text && renderModal()}

        </div>
        // </div>
    );
}

export default Modal;
