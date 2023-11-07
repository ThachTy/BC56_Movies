import React from 'react';
import { Rate } from "antd";
import { Link } from 'react-router-dom';
import "./style.css";

export default function CardMovie({ movie }) {
    return (
        <div className="card-movie group relative">
            <div className="card-image aspect-h-1 aspect-w-1 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none ">
                <img
                    src={movie?.hinhAnh}
                    alt={movie?.maPhim}
                    className="h-[350px] w-full object-cover"
                />
            </div>
            <div className="card-content p-2 w-full ">
                <a className='card-name block h-[40px] mt-1' href={movie?.trailer}>
                    {movie?.tenPhim}
                </a>
                {/* Rate */}
                <Rate disabled allowHalf defaultValue={Math.round(movie?.danhGia / 2)} />

                <p className="card-date mb-2"><i class="bi bi-calendar-heart mx-1"></i>{new Date(movie?.ngayKhoiChieu)?.toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                <div className='w-full flex flex-row gap-1'>
                    <button className='card-booking w-full px-[0.3rem] py-[0.2rem]' type='button'>Đặt Vé</button>
                    <Link to={`/Movie/${movie?.maPhim}`} className='card-detail w-full px-[0.3rem] py-[0.2rem]' type='button'>Chi Tiết</Link>
                </div>
            </div>
        </div>
    )
}
