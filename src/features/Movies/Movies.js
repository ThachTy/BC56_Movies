import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "antd";
import CardMovie from "./compontent/CardMovie/CardMovie";
import { moviesAPI } from "../../service/axios/api";
import Booking from "../../pages/Booking/Booking";

export default function Movies() {
  const [listMovie, setListMovie] = useState([]);
  const totalMovieRef = useRef(0);

  useEffect(() => {
    const fetchMoviesFormApi = async () => {
      try {
        await moviesAPI
          .getAllMovies()
          .then((res) => {
            console.log(
              "🚀 ~ file: Movies.js:17 ~ .then ~ res:",
              res?.data.content.items
            );

            totalMovieRef.current = res?.data.content.totalCount;
            setListMovie(res?.data.content.items);
          })
          .catch((error) => {
            throw error;
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesFormApi();
  }, []);

  const handleChangePage = async (page, pageSize) => {
    try {
      await moviesAPI
        .getMovies(page, pageSize)
        .then((res) => {
          setListMovie(res?.data.content.items);
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="text-center py-3 pb-5 ">
        <Pagination
          onChange={(page, pageSize) => handleChangePage(page, pageSize)}
          defaultCurrent={1}
          defaultPageSize={10}
          total={totalMovieRef.current}
        ></Pagination>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-5">
        {listMovie?.map((movie) => (
          <div key={movie.maPhim}>
            <CardMovie movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
