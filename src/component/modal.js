import React, { useState } from 'react';
import './modal.css';

function Modal(props) {

    const [openModal, setOpenModal] = useState(false);

    const text = props.text;
    //console.log("TE", text);
    const books = props.data;
    // console.log(books);

    const renderModal = () => {
        return (
            //setOpenModal(!openModal),
            <div>
                {books ? books.slice(0, 5).map(book => (
                    <div className="books-div">
                        <p key={book.id}>{book.volumeInfo.title}</p>
                    </div>
                )) : ""}
            </div>
            //setOpenModal(false)

        );
    };

    const test = () => {
        if (text) {
            console.log("yep");
        }
        else {
            console.log("nop");
        }
    };




    return (
        <div className={`${text ? "mainDiv" : null}`}>
            {text && renderModal()}
            {test()}
        </div>
    );
}

export default Modal;
