import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import CardMovie from './compontent/CardMovie/CardMovie';
import { moviesAPI } from '../../service/axios/api';


export default function Movies() {
    const [listMovie, setListMovie] = useState([]);
    console.log(listMovie);
    useEffect(() => {
        const fetchMoviesFormApi = async () => {
            try {
                await moviesAPI.getMovies(1, 10).then(res => {
                    setListMovie(res?.data.content.items);
                }).catch(error => { throw error });
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoviesFormApi();
    }, [])


    return (
        <>
            <div className='text-center py-3 pb-5 '><Pagination defaultCurrent={1} total={50}></Pagination></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-5">
                {
                    listMovie?.map((movie) => (
                        <CardMovie key={movie.maPhim} movie={movie}></CardMovie>
                    ))}
            </div>
        </>
    )
}
