import React from "react";
import "./productdetails.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetail = () => {
    const thumbsSwiper = React.useRef(null);

    return (
        <div className="product-main">
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

                            {/* Main Image */}
                            <Swiper
                                onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                                className="main-img-swiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/dolore-magnam.jpg" alt="product" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/adipisci-velit.jpg" alt="product" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/numquam-eius.jpg" alt="product" />
                                </SwiperSlide>
                            </Swiper>

                            {/* Thumbnail Slider */}
                            <Swiper
                                onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
                                spaceBetween={10}
                                slidesPerView={6}
                                navigation
                                watchSlidesProgress
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
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque.
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
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </select>
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
                                <select>
                                    <option>Cotton</option>
                                    <option>Polyester</option>
                                    <option>Silk</option>
                                </select>
                            </div>

                            <div className="option">
                                <label>Pattern</label>
                                <select>
                                    <option>Solid</option>
                                    <option>Striped</option>
                                    <option>Checked</option>
                                </select>
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
                                <i className="fa-solid fa-truck"></i> Delivery: 2 Working Days
                                <br />
                                Expected Delivery Date is 23rd January, 2026
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
