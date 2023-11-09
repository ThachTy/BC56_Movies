import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesAPI } from "../../service/axios/api";
import "../Booking/style.css";

export default function BuyTicket() {
  const { maLichChieu } = useParams();
  const [room, setRoom] = useState([]);
  const [selectSeat, setSelectSeat] = useState([]);

  let getBooking = () => {
    moviesAPI
      .getToBuy(maLichChieu)
      .then((res) => {
        console.log(
          "🚀 ~ file: BuyTicket.js:14 ~ .then ~ res:",
          res.data.content
        );
        setRoom(res.data.content);
      })
      .catch((err) => {
        console.log("🚀 ~ file: BuyTicket.js:17 ~ getBooking ~ err:", err);
      });
  };
  useEffect(() => {
    getBooking();
  }, []);
  let renderListSeat = () => {
    return (
      room?.danhSachGhe &&
      room?.danhSachGhe.map((seat) => {
        return (
          <span
            key={seat.maGhe}
            className={`${seat.loaiGhe === "Vip" ? "gheVip" : "gheThuong"}  ${
              seat.daDat === true ? "gheDaDat" : "cursor-pointer"
            }`}
            onClick={() => handleSelectChair(seat)}
            style={{
              backgroundColor: isSelected(seat) ? "green" : "",
            }}
          >
            {seat.daDat === false ? seat.tenGhe : "X"}
          </span>
        );
      })
    );
  };

  let isSelected = (seat) => {
    return selectSeat?.some((chair) => chair.maGhe === seat.maGhe);
  };

  let handleSelectChair = (seat) => {
    if (seat.daDat) {
      return;
    }
    if (isSelected(seat)) {
      setSelectSeat((prevSelectChair) =>
        prevSelectChair.filter((chair) => chair.maGhe !== seat.maGhe)
      );
    } else {
      setSelectSeat((prevSelectChair) => [...prevSelectChair, seat]);
    }
  };
  return (
    <div className="bookingMovie ">
      <div className="container flex py-5 gap-5">
        <div>
          <div className="grow grid grid-cols-10 gap-5">{renderListSeat()}</div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="gheThuong inline-block"></span>
            <span>Ghế thường</span>

            <span className="gheVip inline-block"></span>
            <span>Ghế Vip</span>

            <span className="gheDaDat inline-block">X</span>
            <span>Ghế đã đặt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
