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
