import React, { useState } from "react";
import axios from "axios";
import FetchBooks from '../service/getRequest';
import Modal from '../component/modal';
import './input.css';


function Input(props) {

    //const [books, setBooks] = useState([]);
    const setInput = props.setInput;
    const setBooks = props.setBooks;
    const [text, setText] = useState('');

    // const fth = (value) => {
    //     return axios
    //         .get(
    //             `https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${value}&startIndex=0&maxResults=10`,
    //         )
    //         .then((res) => res.data.items)
    //         .catch((err) => console.log(err.message));
    // };

    const handleFetchBooks = async (value) => {
        const resultItems = await FetchBooks(value);
        setBooks(resultItems);
        console.log(resultItems);
    };

    const handleInputChange = (e) => {
        const searchedText = e.target.value.trim();
        setText(searchedText);
        if (searchedText.length > 3) {
            handleFetchBooks(searchedText);
            setInput(searchedText);
            //Modal(searchedText);
        }
        else if (searchedText.length <= 3) {
            setBooks(null);
        }
    };

    return (
        <div>

            <form className="form">
                <input className={`${text.length > 3 ? "bottomInput" : "input"}`}
                    onChange={handleInputChange} type="text" />
            </form>

        </div>
    );
}

export default Input;
