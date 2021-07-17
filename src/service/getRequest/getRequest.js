import axios from 'axios';

const getRequest = (props, cancelRef) => {
    const value = props;
    return axios
        .get(
            `https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${value}&startIndex=0&maxResults=10`,

            {
                cancelToken: new axios.CancelToken(function executor(c) {
                    cancelRef.current = c;
                }),
            })
        .then((res) => res.data.items)
        .catch((err) => console.log(err.message));



};

export default getRequest;