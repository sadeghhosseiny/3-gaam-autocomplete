import React from 'react';

function Book({ string, highlightedText, endString, author }) {

    return (
        <>
            <h4>
                {string}
                <span style={{ fontWeight: "bolder" }}>
                    {highlightedText}
                </span>
                {endString}

            </h4>
            <p>{author}</p>
        </>
    );
}

export default Book;
