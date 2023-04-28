import axios from 'axios';
import { useEffect, useState } from 'react';


export type IShow = {
    id: number;
    bandName: string;
    location: string;
    tourName?: string;
    venueName: string;
    date?: string | Date;
    venueLink?: string;
}

export interface ShowsResponse {
    shows: IShow[]
}


export const fetchShows = (
    onSuccess: (val: IShow[]) => void,
    onError: (msg: string) => void
): Promise<IShow> => {
    return axios
            .get('http://localhost:8080/shows')
            .then(response => response.data)
            .catch((e) => {
                throw new Error(e)
            })
}

export const useShowApi = () => {
    const [data, setData] = useState<IShow[]>([]);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
        
    const fetchShows = (): Promise<IShow> => {
        return axios
                .get('http://localhost:8080/shows')
                .then(response => {
                    setData(response.data)
                    return response.data
                })
                .catch((e) => {
                    setHasError(true)
                    setErrorMessage(e.message)
                })
    }

    useEffect(() => {
      fetchShows();
    }, [])

    return {
        data,
        hasError,
        errorMessage
    } 
}