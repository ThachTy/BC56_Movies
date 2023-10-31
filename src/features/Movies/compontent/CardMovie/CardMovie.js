import React from 'react'

export default function CardMovie({ movie }) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={movie?.hinhAnh}
                    alt={movie?.maPhim}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={movie?.trailer}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {movie?.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{movie?.tenPhim}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{movie?.ngayKhoiChieu}</p>
            </div>
            <div className=''><button className='bg-red-400' type='button'>Đặt Vé</button></div>
        </div>
    )
}
