import { useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { userAPI } from "../../service/axios/api";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "antd";
import { SET_USER } from "../../service/redux/constant/constant";
import { getLocaleStorage } from "../../base/base";
import "./style.css";
function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    let isLogin = getLocaleStorage("User");
    const fetchInfoUser = async () => {
      try {
        const infoUser = await userAPI.getInfoAccount();
        dispatch({ type: SET_USER, payload: { ...infoUser, isLogin: true } });
      } catch (error) {
        console.error(error);
      }
    };
    isLogin && fetchInfoUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("User");
    window.location.href = "/";
  };

  // items dropwdown Login
  const items = [
    { label: "Thông tin", key: 1 },
    {
      label: (
        <button
          className="w-full h-full rounded-sm bg-gray-200"
          onClick={handleLogOut}
        >
          <i className="bi bi-box-arrow-right"></i>
        </button>
      ),
      key: 5,
    },
  ];

  return (
    <header className="header min-w-full sticky top-0 z-50">
      <div className="container-fluid">
        <nav className="lg:px-6 py-2.5">
          <div className="flex flex-nowrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src="./img/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <div>
                {user?.isLogin ? (
                  // Logout
                  <Dropdown placement="bottomLeft" arrow menu={{ items }}>
                    <span className="cursor-pointer text-sm text-login">
                      {user?.hoTen}
                    </span>
                  </Dropdown>
                ) : (
                  // Login
                  <Link className="text-login text-sm" to="/Login">
                    Đăng Nhập
                  </Link>
                )}
              </div>
              {/* Toggle Button */}
              <button
                onClick={() => {
                  document
                    .querySelector("#mobile-menu-2")
                    .classList.toggle("hidden");
                }}
                className="lg:hidden block px-4 ml-3 rounded"
                type="button"
              >
                {/*Toggle Icon */}
                <i className="bi bi-app-indicator text-[crimson]"></i>
              </button>
            </div>
            <div
              className="hidden justify-center items-center flex-row absolute left-0 top-[55px] w-full bg-slate-100 lg:bg-transparent lg:static lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="nav-item">
                  <Link to="/" className=" block py-2 pr-4 pl-3 text-sm">
                    Trang Chủ
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a href="#movies" className=" block py-2 pr-4 pl-3 text-sm">
                    Phim
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="Home/#cinema" className=" block py-2 pr-4 pl-3 text-sm ">
                    Rạp Phim
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="/User/UserPage"
                    className=" block py-2 pr-4 pl-3 text-sm "
                  >
                    Tài Khoản
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link to="/User" className=" block py-2 pr-4 pl-3 text-sm ">
                    Tài Khoản
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className=" block py-2 pr-4 pl-3 text-sm">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default memo(Header);
