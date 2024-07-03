import { memo, useState } from "react";
import "./style.scss"
import { BiCart, BiLogoFacebookCircle, BiLogoGmail, BiLogoInstagramAlt, BiMenu, BiSolidPhone, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/fomater";
import { ROUTERS } from "../../../../utils/router";
const Header = () => {
    const[isShowCategories, setShowCategories] = useState(true);
    const[menus] = useState([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "CỬA HÀNG",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "SẢN PHẨM",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                 name: "Iphone",
                 path: "",   
                },
                {
                    name: "SamSung",
                    path: "",   
                   }
            ]
        },
        {
            name: "BÀI VIẾT",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "LIÊN HỆ",
            path: ROUTERS.USER.HOME,
        }
    ])
    return (
        <>
    <div className="header__top">
        <div className="container">
        <div className="row">
            <div className="col-6 header__top_left">
                <ul>
                    <li><BiLogoGmail />
                    nghiahuule101@gmail.com
                    </li>
                    <li>Miễn phí ship đơn từ {formatter(3000000)}</li>
                </ul>
                </div>    
            <div className="col-6 header__top_right">
                <ul>
                    <li>
                        <Link to= {""}>
                        <BiLogoFacebookCircle />
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={""}>
                        <BiLogoInstagramAlt />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                        <BiLogoGmail />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                        <BiUser />
                        </Link>
                    </li>
                    <span>Đăng Nhập</span>
                </ul>
                </div>    
             </div>
        </div>;
     </div>
     <div className="container">
     <div className="row">
        <div className="col-xl-3">
            <div className="header__logo">
                <h1>ĐIỆN THOẠI TỐT</h1>
            </div>
        </div>
        <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {
                    menus?.map((menu, menuKey) =>(
                        <li key={menuKey} className={menuKey == 0 ? "active": ""}>
                            <Link to="{menu?.path">{menu?.name}</Link>
                            {
                                menu.child &&(
                                    <ul className="header__menu__dropdown">
                                        {
                                            menu.child.map((childItem, childKey) => (
                                                <li key={`${menuKey}-${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                            ))}
                                        
                                    </ul>
                                )
                            }
                        </li>
                    ))}
              </ul>
            </nav>

        </div>
        <div className="col-xl-3">
            <div className="header__cart">
            <div className="header__cart_price">
                <span>{formatter(4000000)}</span>
                </div>
                <ul>
                    <li>
                        <Link to="#">
                        <BiCart /> <span>2</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        <div className="container">
            <div className="row hero__categories_container">
                <div className="col-lg-3 hero__categories">
                    <div className="hero__categories__all" onClick={() => setShowCategories(!isShowCategories)}>
                    <BiMenu />
                        Danh sách sản phẩm
                    </div>
                <ul className={isShowCategories ? "" : "hidden"}>
                     <li>
                         <Link to={"#"}>SamSung</Link>
                    </li>
                    <li>
                         <Link to={"#"}>Iphone</Link>
                    </li>
                    <li>
                         <Link to={"#"}>Phụ kiện điện thoại</Link>
                    </li>
                </ul>
                </div>
                <div className="col-lg-9 hero__search_container">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form>
                                <input type="text" placeholder="Bạn đang tìm gì?"/>
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                        <div className="hero__search__phone__icon">
                            <BiSolidPhone />
                        </div>
                        <div className="hero__search__phone__text">
                            <p>0703.590.014</p>
                            <span>Hỗ trợ 24/7</span>
                        </div>
                        </div>
                    </div>
                    <div className="hero__item">
                    </div>
                </div>

            </div>
        </div>
     </>   
    );
};
export default memo(Header);