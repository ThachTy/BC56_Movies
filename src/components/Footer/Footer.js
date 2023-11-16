import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="min-w-full flex flex-col justify-center items-center py-5">
      <div className="container">
        <div className="col"></div>
        <div className="col text-center px-3">
          <h5 className="text-[crimson] font-bold text-lg">
            TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
          </h5>
          <a href="#" className="text-[gray] hover:text-[#fff]">
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </a>
          <p className="text-[gray] hover:text-[#fff]">
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783 đăng ký thay đổi
            lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
            phố Hồ Chí Minh cấp.
          </p>

          <a href="#" className="text-[gray] hover:text-[#fff]">
            Số Điện Thoại (Hotline): 1900 545 436
          </a>
        </div>
        <div className="col"></div>
      </div>
    </footer>
  );
}
