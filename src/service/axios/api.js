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

export const bannerAPI = {
  getBanners: async () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  },
};

export const moviesAPI = {
  // /api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09
  getAllMovies: async () => {
    return await https.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09`
    );
  },
  // /api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=10
  getMovies: async (soTrang, soPhanTuTrenTrang) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );
  },
};

export let adminService = {
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
