import React from 'react';
import "./style.css";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide bg-red-200" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block lg:object-cover object-contain w-100" src="https://images.hdqwalls.com/download/marvel-avengers-the-kang-dynasty-t0-1280x800.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block lg:object-cover object-contain w-100" src="https://i.ytimg.com/vi/3LIn-taLi84/maxresdefault.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block lg:object-cover object-contain w-100" src="https://wallpaperaccess.com/full/621144.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};
export default Carousel;