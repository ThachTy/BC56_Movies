import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Movies from "../../features/Movies/Movies";
import Cinema from "../../features/Cinema/Cinema";
export default function HomePage() {
    return (
        <main>
            {/* Banner */}
            <section className='carousel'>
                <div className='carousel-content'>
                    <Carousel></Carousel>
                </div>
            </section>

            {/* Movies */}
            <section id="movies" className='movies'>
                <div className='container'>
                    {/* Search */}
                    <div className='bg-slate-400 grid grid-cols-4'>
                        <div className='col'>
                            <select>
                                <option>Phim</option>
                            </select>
                        </div>
                        <div className='col'>
                            <select>
                                <option>Rạp</option>
                            </select>
                        </div>
                        <div className='col'>
                            <select>
                                <option>Ngày chiếu</option>
                            </select>
                        </div>
                        <div className='col'>
                            <input type='text' placeholder='Tìm phim...' />
                        </div>
                    </div>
                    {/* All Movies */}
                    <div className='movies-content'>
                        <Movies></Movies>
                    </div>
                </div>
            </section>

            {/* Cinema */}
            <section id='cinema' className='cinema'>
                <div className='container'>
                    <h3 className='text-center'>Rạp Chiếu Phim</h3>
                    <Cinema></Cinema>
                </div>
            </section>

        </main>
    )
}
