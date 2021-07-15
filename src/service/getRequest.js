import React from 'react';
import axios from 'axios';

const getRequest = (props) => {
    const value = props;
    console.log("this is props", value);
    return axios
        .get(
            `https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${value}&startIndex=0&maxResults=10`,
        )
        .then((res) => res.data.items)
        .catch((err) => console.log(err.message));

};

export default getRequest;