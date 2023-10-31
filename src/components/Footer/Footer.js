import React from 'react'
import "./style.css";

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center items-center py-5'>
            <div className="container">
                <div className='col'></div>
                <div className='col text-center'>
                    <h5>TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
                    <a href='#'>
                        Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                    </a>
                    <p>
                        Giấy chứng nhận đăng ký kinh doanh số: 0101659783
                        đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                    </p>

                    <a href='#'> Số Điện Thoại (Hotline): 1900 545 436</a>
                </div>
                <div className='col'></div>
            </div>
        </footer >
    )
}
