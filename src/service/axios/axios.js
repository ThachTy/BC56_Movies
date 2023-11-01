import { https } from "./config";
export let adminUser = {
  getUserList: (query = "") => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung/${query}`);
  },
};
