import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-100 min-w-full sticky top-0 z-50">
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
                <Link to="/Login">Đăng Nhập</Link>
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
                <i className="bi bi-text-wrap"></i>
              </button>
            </div>
            <div
              className="hidden justify-center items-center flex-row absolute left-0 top-[55px] w-full bg-slate-100 lg:bg-transparent lg:static lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to="/" className="block py-2 pr-4 pl-3">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <a href="#movies" className="block py-2 pr-4 pl-3">
                    Phim
                  </a>
                </li>
                <li>
                  <a href="#cinema" className="block py-2 pr-4 pl-3">
                    Rạp Phim
                  </a>
                </li>
                <li>
                  <Link to="/User" className="block py-2 pr-4 pl-3">
                    User
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block py-2 pr-4 pl-3">
                    Contact
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
