import https from "./axios"; // https://movienew.cybersoft.edu.vn

export const userAPI = {
  // admin01 - admin123
  postLoginUser: async ({ taiKhoan, matKhau }) => {
    return https.post(`/api/QuanLyNguoiDung/DangNhap/`, { taiKhoan, matKhau });
  },
  // getUserFromAccessToken: (accessToken) => {
  //     return https.post();
  // },

  getTypeUser: async () => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
  },

  postNewUser: async (user) => {
    return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, user);
  },
};

//     // admin01 - admin123
//     postLoginUser: async ({ taiKhoan, matKhau }) => {
//         return https.post(`/api/QuanLyNguoiDung/DangNhap/`, { taiKhoan, matKhau });
//     },
//     //
//     getTypeUser: async () => {
//         return https.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
//     },
//     //
//     postNewUser: async (user) => {
//         return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, user);
//     },
// }

/* Banner */
export const bannerAPI = {
  getBanners: async () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  },
};

/* Movies */
export const moviesAPI = {
  // /api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09
  getAllMovies: async () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09`);
  },
  // /api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=10
  getMovies: async (soTrang, soPhanTuTrenTrang) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );
  },
  getDetail: async (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getMovieByTheather: async () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  getDetailBooking: async (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`);
  },
  getToPurchase: async (idBooking) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
    );
  },
  bookingTicket: async (ticket) => {
    return https.post("/api/QuanLyDatVe/DatVe", ticket);
  },
};

export const adminService = {
  getUserList: (query = "") => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung/${query}`);
  },

  deleteUser: (taiKhoan = "") => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  getUserDetailId: (taiKhoan) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  updateUser: (payload) => {
    console.log(payload);
    return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, payload);
  },
};

export const cinemaAPI = {
  //
  getAllCinema: async () => {
    return await https.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  },
  ///api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP09
  getAllGroupCinema: async (maHeThongRap = "") => {
    return await https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
  },
};
