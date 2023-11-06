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
}


export const bannerAPI = {
    getBanners: async () => {
        return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
}

export const moviesAPI = {
    // https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=10
    getMovies: async (soTrang = 1, soPhanTuTrenTrang = 10) => {
        return https.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=10`);
    }
}