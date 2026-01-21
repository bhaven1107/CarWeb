import React from "react";
import "./productdetails.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Header from "../header/Header";
import Footer from "../footer/footer";

const ProductDetail = () => {
    const thumbsSwiper = React.useRef(null);

    return (
        <>
            <Header />
            <div className="product-main py-4">
                <div className="container">
                    <div className="row">
                        {/* Breadcrumb */}
                        <div className="col-lg-12">
                            <div className="bread-crum">
                                <a href="#">Home</a> / <span>Accusantium Dolore</span>
                            </div>
                        </div>

                        {/* Left Image Section */}
                        <div className="col-lg-6">
                            <div className="product-gallery">
                                <span className="badge new">NEW</span>
                                <span className="badge sale">ON SALE!</span>


                                <div className="main-img">
                                    <img src="./assests/dolore-magnam.jpg" alt="product" />
                                </div>

                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={4.5}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="thumbs-swiper"
                                >
                                    <SwiperSlide>
                                        <img src="./assests/dolore-magnam.jpg" alt="thumb" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src="./assests/adipisci-velit.jpg" alt="thumb" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src="./assests/numquam-eius.jpg" alt="thumb" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src="./assests/adipisci-velit.jpg" alt="thumb" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src="./assests/numquam-eius.jpg" alt="thumb" />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img src="./assests/dolore-magnam.jpg" alt="thumb" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6">
                            <div className="product-info">
                                <h2>Accusantium Dolore</h2>
                                <h3 className="price">$309.00</h3>
                                <p className="desc">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>

                                <ul>
                                    <li>Ut enim ad minima veniam</li>
                                    <li>Nisi ut aliquid ex ea commodi</li>
                                    <li>Quis autem vel eum iure</li>
                                    <li>Velit esse quam nihil</li>
                                    <li>Dolorem eum fugiat</li>
                                </ul>

                                {/* Options */}
                                <div className="option">
                                    <label>Size</label>

                                    <div className="select-wrap">
                                        <select className="size-select">
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="option">
                                    <label>Color</label>
                                    <span className="color white"></span>
                                    <span className="color yellow"></span>
                                    <span className="color brown"></span>
                                </div>

                                {/* New Fields After Color */}
                                <div className="option">
                                    <label>Material</label>
                                    <div className="select-wrap">
                                        <select className="size-select">
                                            <option>Cotton</option>
                                            <option>Polyester</option>
                                            <option>Silk</option>
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="option">
                                    <label>Pattern</label>
                                    <div className="select-wrap">
                                        <select className="size-select">
                                            <option>Solid</option>
                                            <option>Striped</option>
                                            <option>Checked</option>
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="cart-row">
                                    <input type="number" defaultValue={1} />
                                    <button>ADD TO CART</button>
                                </div>

                                <p className="stock">
                                    HURRY! ONLY <b>4</b> ITEMS LEFT IN STOCK
                                </p>

                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>

                                <div className="delivery">
                                    <p className="Working-day"><i className="fa-solid fa-truck"></i> Delivery: 2 Working Days</p>
                                    <p className="Expected-date">Expected Delivery Date is 23rd January, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
