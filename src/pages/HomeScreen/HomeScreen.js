import React, { useState, useRef } from 'react';
import Modal from '../../component/modal';
import Input from '../../lib/input';
import FetchBooks from '../../service/getRequest';

function HomeScreen() {

    const [inputValue, setInputValue] = useState('');
    const [books, setBooks] = useState([]);

    const [typingTimeout, setTypingTimeout] = useState(0);
    const cancelRef = useRef(null);

    const handleFetchBooks = async (value) => {
        const resultItems = await FetchBooks(value, cancelRef);
        setBooks(resultItems);
        console.log(resultItems);
    };

    const handleInputChange = (e) => {
        clearTimeout(typingTimeout);
        if (cancelRef.current) cancelRef.current();

        setTypingTimeout(setTimeout(() => {
            const searchedText = e.target.value.toLowerCase().trim();

            setInputValue(searchedText);
            handleFetchBooks(searchedText);


            // setInputValue('');

        }, 1000));
    };




    return (
        <div>
            <Input
                onChange={handleInputChange} className={`${inputValue.length > 0 ? "searchContainerBottom" : "searchContainer"}`} />
            <Modal text={inputValue} data={books} />
        </div>
    );
}

export default HomeScreen;
