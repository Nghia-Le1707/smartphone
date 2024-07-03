import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import ip15promaxImg from "assets/users/images/categories/ip15promax.jpg";
import ip15plusImg from "assets/users/images/categories/ip15plus.jpg";
import ssa35Img from "assets/users/images/categories/ssa35.jpg";
import sss24Img from "assets/users/images/categories/sss24.jpg";
import ip12Img from "assets/users/images/categories/ip12.jpg";
import ip13Img from "assets/users/images/featured/ip13.jpg";
import ssa05Img from "assets/users/images/featured/ssa05.jpg";
import ssa55Img from "assets/users/images/featured/ssa55.jpg";
import ssgm54Img from "assets/users/images/featured/ssgm54.jpg";
import ip11Img from "assets/users/images/featured/ip11.jpg";
import ip14Img from "assets/users/images/featured/ip14.jpg";
import ip14promaxImg from "assets/users/images/featured/ip14promax.jpg";
import ssa15Img from "assets/users/images/featured/ssga15.jpg";

import "./style.scss"
import { render } from "@testing-library/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const HomePage = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    const sliderItems = [
        {
            bgImg: ip15promaxImg,
        },
        {
            bgImg: ip15plusImg,
        },
        {
            bgImg: ssa35Img,
        },
        {
            bgImg: sss24Img,
        },
        {
            bgImg: ip12Img,
        },
    ];


    const featProducts = {
        all: {
            title: "Tất cả",
            products: [
                {
                    img: ssa05Img,
                    name:"SamSung Galaxy A05",
                    price: 3090000 ,
                },
                {
                    img: ip13Img,
                    name:"Iphone 13",
                    price: 29990000 ,
                },
                {
                    img: ip11Img,
                    name:"Iphone 11",
                    price: 8990000 ,
                },
                {
                    img: ip14Img,
                    name:"Iphone 14",
                    price: 17390000 ,
                },
                {
                    img: ip14promaxImg,
                    name:"Iphone 14 ProMax",
                    price: 27390000 ,
                },
                {
                    img: ssa55Img,
                    name:"SamSung Galaxy A55",
                    price: 10190000 ,
                },
                {
                    img: ssgm54Img,
                    name:"SamSung Galaxy M54",
                    price: 8990000 ,
                },
                {
                    img: ssa15Img,
                    name:"SamSung Galaxy A15",
                    price: 5790000 ,
                },
            ],
        },
        SamSung: {
            title: "SamSung",
            products: [
                {
                    img: ssa05Img,
                    name:"SamSung Galaxy A05",
                    price: 3090000 ,
                },
{
                    img: ssa55Img,
                    name:"SamSung Galaxy A55",
                    price: 10190000 ,
                },
{
                    img: ssgm54Img,
                    name:"SamSung Galaxy M54",
                    price: 8990000 ,
                },
{
                    img: ssa15Img,
                    name:"SamSung Galaxy A15",
                    price: 5790000 ,
                },

            ],
        },
        Iphone: {
            title : "Iphone",
            products: [
                {
                    img: ip13Img,
                    name:"Iphone 13",
                    price: 29990000 ,
                },
                {
                    img: ip11Img,
                    name:"Iphone 11",
                    price: 8990000 ,
                },
                {
                    img: ip14Img,
                    name:"Iphone 14",
                    price: 17390000 ,
                },
                {
                    img: ip14promaxImg,
                    name:"Iphone 14 ProMax",
                    price: 27390000 ,
                },
            ],
        },  
    };
    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured__item">
                        <div className="featured__item__pic"
                        style={{
                            backgroundImage: `url(${item.img})`,
                        }}
                        >
                            <ul className="featured__item__pic__hover">
                                <li>
                                <AiFillEye />
                                </li>
                                <li>
                                <BiSolidCartAlt />
                                </li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>
                );
            });
            tabPanels.push(tabPanel);
        });


        return (
        <Tabs>
          <TabList>{tabList}</TabList>

          {
            tabPanels.map((item, key) => (
                <TabPanel key={key}>
                    <div className="row">{item}</div>
              </TabPanel>
            ))}
      </Tabs>
        );
    };

    return (
   <>
    {/*Categories Begin*/}
    <div className="container container__categories_slider">
    <Carousel 
    responsive={responsive} className="categories_slider">
        {
            sliderItems.map((item, key) => (
                <div className="categories_slider_item"
                style={{backgroundImage: `url(${item.bgImg})` }}
                key={key}
                >
                </div>  
            ))}

    </Carousel>;
            </div>

    {/*Categories End*/}
    {/* Featured Begin */}
    <div className="container">
        <div className="featured">
            <div className="section-tille">
                <h2>Sản phẩm nổi bật</h2>       
            </div>
            {renderFeaturedProducts(featProducts)}
        </div>
    </div>
    {/* Featured End */}
    {/* Banner Begin */}
    {/* <div className="container">
    <div className="banner">
        <div className="banner__pic">
           <img src="" alt="banner" />
        </div>
    </div>
    </div> */}

    {/* Banner End */}
        </>
    );
};
export default memo(HomePage);