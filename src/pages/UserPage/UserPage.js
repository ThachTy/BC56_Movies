import React, { useEffect, useState } from "react";
import { adminUser } from "../../service/axios/axios";
import { Table, Tag } from "antd";

export default function UserPage() {
  // gọi api lấy danh sách người dùng
  const [user, setUser] = useState([]);
  console.log("🚀 ~ file: UserPage.js:7 ~ UserPage ~ user:", user);
  const getUser = () => {
    adminUser
      .getUserList("?manhom=GP01")
      .then((res) => {
        console.log("🚀 ~ file: UserPage.js:11 ~ .then ~ res:", res);
        setUser(res.data.content);
      })
      .catch((err) => {
        console.log("🚀 ~ file: UserPage.js:15 ~ getUser ~ err:", err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "hoTen",
      key: "name",
    },
    {
      title: "Gmail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User Type",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text == "KhachHang") {
          return <Tag color="green">Khách Hàng</Tag>;
        } else {
          return <Tag color="red">Quản trị</Tag>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      // render: (value, recordItem, index) => {
      //   return (
      //     <div className="flex gap-5">
      //       <Button
      //         type="primary"
      //         onClick={async () => {
      //           try {
      //             const res = await adminService.getUserDetailById(
      //               recordItem.taiKhoan
      //             );
      //             if (res) {
      //               setOpenDrawer(true);
      //               setUserDetail(res.data.content);
      //             }
      //           } catch (err) {
      //             console.log("🚀 ~ file: UsersPage.js:98 ~ ", err);
      //           }
      //         }}
      //       >
      //         Edit
      //       </Button>
      //       <Button
      //         danger
      //         onClick={() => {
      //           setUserDelete(recordItem);
      //           setIsOpenModal(true);
      //         }}
      //       >
      //         Delete
      //       </Button>
      //     </div>
      //   );
      // },
      with: 100,
    },
  ];
  return (
    <div>
      <Table dataSource={user} columns={columns} />;
    </div>
  );
}
