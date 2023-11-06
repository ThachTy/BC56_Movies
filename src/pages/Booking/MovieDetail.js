import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { moviesAPI } from "../../service/axios/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    moviesAPI
      .getDetail(id)
      .then((res) => {
        console.log("🚀 ~ file: MovieDetail.js:13 ~ .then ~ res:", res);
      })
      .catch((err) => {
        console.log("🚀 ~ file: MovieDetail.js:16 ~ useEffect ~ err:", err);
      });
  }, []);

  return <div></div>;
}
