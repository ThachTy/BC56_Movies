import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../service/axios/api';

function DetailMoviePage() {
    const { maPhim } = useParams();
    const [detailMovie, setDetailMovie] = useState({});
    console.log(detailMovie);

    useEffect(() => {
        const fetchDetailMovie = async () => {
            try {
                moviesAPI.getDetailMovie(maPhim)
                    .then(res => {
                        setDetailMovie(res?.data.content);
                    })
                    .catch(error => { throw error });
            } catch (error) {
                console.error(error);
            }
        }
        fetchDetailMovie();
    }, [maPhim])


    return (
        <div>DetailMoviePage - {maPhim}</div>
    )
}

export default DetailMoviePage