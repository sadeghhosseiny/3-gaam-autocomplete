import React, { useState } from 'react';
import Modal from '../component/modal';
import Input from '../lib/input';

function HomeScreen() {

    const [input, setInput] = useState('');
    const [books, setBooks] = useState([]);

    return (
        <div>
            <Input setInput={setInput} setBooks={setBooks} />
            <Modal text={input} data={books} />
        </div>
    );
}

export default HomeScreen;
