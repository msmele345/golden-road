import axios from 'axios';
import { useEffect, useState } from 'react';


export const useGetApi = (url) => {
    const [responseData, setResponseData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchIngredients = () => {
        setIsLoading(true);

        return axios
            .get(url)
            .then(res => {
                setResponseData(res.data)
                setIsLoading(false)
            })
            .catch(e => {
                setHasError(true);
                setErrorMessage(e.message || "")
                setIsLoading(false)
            })
    };


    useEffect(() => {
      fetchIngredients();
    }, [])


    return {
        responseData,
        setResponseData,
        hasError,
        isLoading,
        errorMessage
    }
};

export default useGetApi;