import React, { useState } from 'react';
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
                {books ? books.filter(book => book.volumeInfo.title.toLowerCase().includes(text.toLowerCase())).slice(0, 5).map(book => (

                    <div key={book.id} className="books-div">
                        <p >{book.volumeInfo.title}</p>
                    </div>
                )) : ""}
            </div>
            //setOpenModal(false)

        );
    };


    return (
        <div className={`${text.length > 3 ? "mainDiv" : null}`}>
            {text && renderModal()}

        </div>
    );
}

export default Modal;
