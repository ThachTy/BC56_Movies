import https from "./axios"; // https://movienew.cybersoft.edu.vn

export const userAPI = {
    //
    getTypeUser: async () => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    },
    //
    getInfoAccount: async () => {
        let account = await https.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`).then(res => res.data);
        return account.content ?? null;
    },
    // meta - meta
    postLoginUser: async ({ taiKhoan, matKhau }) => {
        return https.post(`/api/QuanLyNguoiDung/DangNhap/`, { taiKhoan, matKhau });
    },
    //
    postNewUser: async (user) => {
        return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, user);
    },
}

/* Banner */
export const bannerAPI = {
    getBanners: async () => {
        return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
}

/* Movies */
export const moviesAPI = {
    //
    getAllMovies: async () => {
        return await https.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09`);
    },
    //
    getMovies: async (soTrang, soPhanTuTrenTrang) => {
        return https.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`);
    },
    // get Detail Movie by maPhim
    getDetailMovie: async (maPhim = "") => {
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    }
}

export const cinemaAPI = {
    //
    getAllCinema: async () => {
        return await https.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
    },
    ///api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP09
    getAllGroupCinema: async (maHeThongRap = "") => {
        return await https.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`);
    },
}