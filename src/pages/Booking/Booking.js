import React from "react";
import ListSeat from "./ListSeat";
import ChooseSeat from "./ChooseSeat";
import Header from "../../components/Header/Header";

export default function Booking() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ListSeat />
          </div>
          <div className="col-5">
            <ChooseSeat />
          </div>
        </div>
      </div>
    </div>
  );
}
