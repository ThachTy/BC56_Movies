import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import CardMovie from './compontent/CardMovie/CardMovie';
import { movies } from '../../LayDanhSachPhim';



export default function Movies() {
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        setListMovie(movies);
    }, [])


    return (
        <div className="bg-white rounded-md mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
            <div className='text-center'><Pagination defaultCurrent={1} total={50}></Pagination></div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    listMovie.map((movie) => (
                        <CardMovie key={movie.maPhim} movie={movie}></CardMovie>
                    ))}
            </div>
        </div>
    )
}
