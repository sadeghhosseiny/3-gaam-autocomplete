import React, { useState } from 'react';
import Modal from '../../component/modal/modal';
import Input from '../../lib/input/input';
import FetchBooks from '../../service/getRequest/getRequest';

function HomeScreen() {

    const [inputValue, setInputValue] = useState('');
    const [books, setBooks] = useState([]);

    const [typingTimeout, setTypingTimeout] = useState(0);

    const handleFetchBooks = async (value) => {
        const resultItems = await FetchBooks(value);
        setBooks(resultItems);
        console.log(resultItems);
    };

    const handleInputChange = (e) => {
        clearTimeout(typingTimeout);

        setTypingTimeout(setTimeout(() => {
            const searchedText = e.target.value.toLowerCase().trim();
            if (searchedText.length > 3) {
                setInputValue(searchedText);
                handleFetchBooks(searchedText);
            }
            else if (searchedText.length <= 3) {
                setInputValue('');
            }
        }, 1000));
    };




    return (
        <div>
            <Input
                onChange={handleInputChange} className={`${inputValue.length > 3 ? "searchContainerBottom" : "searchContainer"}`} />
            <Modal text={inputValue} data={books} />
        </div>
    );
}

export default HomeScreen;
