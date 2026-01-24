import React from "react";
import "./productdetails.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import useProductDetailsLogic from "./productdetailslogic";

const ProductDetail = () => {
    const thumbsSwiper = React.useRef(null);
    const [activeImg, setActiveImg] = useState("");

    const {
        product,
        stockLeft,
        delivery,
        loading,
        finalPrice,
        selectedColor,
        setSelectedSize,
        setSelectedDimension,
        setSelectedColor,
        setSelectedPaperType
    } = useProductDetailsLogic();

    useEffect(() => {
        if (product?.mainImg) {
            setActiveImg(product.mainImg);
        }
    }, [product]);

    if (loading) return <p className="text-center">Loading...</p>;


    return (
        <>
            <Header />
            <div className="product-main py-4">
                <div className="container">
                    <div className="row">

                        {/* Breadcrumb */}
                        <div className="col-lg-12">
                            <div className="bread-crum">
                                <a href="#">Home</a> / <span>{product?.title}</span>
                            </div>
                        </div>

                        {/* Left Image Section */}
                        <div className="col-lg-6">
                            <div className="product-gallery">

                                {product?.isNew && <span className="badge new">NEW</span>}
                                {product?.onSale && <span className="badge sale">ON SALE!</span>}

                                <div className="main-img">
                                    <img
                                        src={activeImg}
                                        alt={product?.title}
                                    />
                                </div>

                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={4.5}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="thumbs-swiper"
                                >
                                    {product?.thumbImgs?.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={img.trim()}
                                                alt="thumb"
                                                onClick={() => setActiveImg(img.trim())}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </SwiperSlide>
                                    ))}  
                                </Swiper>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6">
                            <div className="product-info">

                                <h2>{product?.title}</h2>
                                <h3 className="price">${finalPrice}</h3>

                                <p className="desc">
                                    {product?.description}
                                </p>

                                <ul>
                                    {product?.highlights?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                {/* Size */}
                                <div className="option">
                                    <label>Size</label>
                                    <div className="select-wrap">
                                        <select className="size-select"
                                            onChange={(e) =>
                                                setSelectedSize(product.sizes.find(s => s.label === e.target.value))
                                            }>
                                            <option>Select Size</option>
                                            {product.sizes.map((size, index) => (
                                                <option key={index} value={size.label}>{size.label}</option>
                                            ))}
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                {/* Dimension */}
                                <div className="option">
                                    <label>Dimension</label>
                                    <div className="select-wrap">
                                        <select className="size-select"
                                            onChange={(e) =>
                                                setSelectedDimension(product.dimension.find(d => d.label === e.target.value))
                                            }>
                                            <option>Select Dimension</option>
                                            {product.dimension.map((d, index) => (
                                                <option key={index} value={d.label}>{d.label}</option>
                                            ))}
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                {/* Color */}
                                <div className="option">
                                    <label>Color</label>
                                    {product.colors.map((clr, index) => (
                                        <span key={index}
                                            className={`color ${selectedColor?.label === clr.label ? "active" : ""}`}
                                            style={{ backgroundColor: clr.label.toLowerCase() }}
                                            onClick={() => setSelectedColor(clr)}
                                        ></span>
                                    ))}
                                </div>

                                {/* Paper Type */}
                                <div className="option">
                                    <label>Paper Type</label>
                                    <div className="select-wrap">
                                        <select className="size-select"
                                            onChange={(e) =>
                                                setSelectedPaperType(product.paperType.find(p => p.label === e.target.value))
                                            }>
                                            <option>Select Paper</option>
                                            {product.paperType.map((p, index) => (
                                                <option key={index} value={p.label}>{p.label}</option>
                                            ))}
                                        </select>
                                        <span className="select-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="cart-row">
                                    <input
                                        type="number"
                                        defaultValue={product?.quantity || 1}
                                        min={1}                   // User 1 thi niche nahi jase
                                        max={stockLeft}           // Stock thi vadhu nahi jase
                                        onChange={(e) => {
                                            let val = parseInt(e.target.value);
                                            if (val < 1) val = 1;
                                            if (val > stockLeft) val = stockLeft;
                                            e.target.value = val;  // input value update
                                        }}
                                    />
                                    <button>ADD TO CART</button>
                                </div>

                                <p className="stock">
                                    HURRY! ONLY <b>{stockLeft}</b> ITEMS LEFT IN STOCK
                                </p>

                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${(stockLeft / 20) * 100}%` }}
                                        aria-valuenow={stockLeft}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>

                                <div className="delivery">
                                    <p className="Working-day">
                                        <i className="fa-solid fa-truck"></i> Delivery: {delivery?.workingDays} Working Days
                                    </p>
                                    <p className="Expected-date">
                                        Expected Delivery Date is {delivery?.expectedDate}
                                    </p>
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
