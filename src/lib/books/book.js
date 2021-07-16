import React from 'react';

function Book({ title, author }) {

    return (
        <>
            <h3>{title}</h3>
            <p>{author}</p>
        </>
    );
}

export default Book;
