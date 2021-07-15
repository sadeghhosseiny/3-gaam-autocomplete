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
            (
                //setOpenModal(!openModal),
                <div>
                    {books ? books.map(book => (
                        <div className="books-div">
                            <p key={book.id}>{book.volumeInfo.title}</p>
                        </div>
                    )) : ""}
                </div>
                //setOpenModal(false)
            )
        );
    };




    return (
        <div className={`${text ? "mainDiv" : ""}`}>
            {text && renderModal()}
        </div>
    );
}

export default Modal;
