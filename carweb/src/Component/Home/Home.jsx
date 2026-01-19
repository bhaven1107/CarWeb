// Home.js
import "./Home.css";
import Header from "../header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import useHomeLogic from "./Homelogic";

const Home = () => {

    const { sliders, slidersLoading,
        services, servicesLoading,
        categories, Categoryloading,
        ads, adsLoading } = useHomeLogic();

    return (
        <>
            <Header />

            {/* Slider Section */}
            <div className="hero-sec">
                {slidersLoading ? (
                    <p style={{ textAlign: "center" }}>Loading sliders...</p>
                ) : (
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                    >
                        {sliders.map((item) => (
                            <SwiperSlide key={item._id}>
                                <div className="hero-img">
                                    <img src={item.imageUrl || item.imageBase64} alt={item.title} />
                                    <div className="hero-inner-text">
                                        <p>{item.title}</p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* Services Section */}
            <div className="service-sec mt-5 mb-5">
                <div className="container">
                    {servicesLoading ? (
                        <p style={{ textAlign: "center" }}>Loading services...</p>
                    ) : (
                        <div className="row">
                            {services.map((service) => (
                                <div className="col-lg-4 col-sm-6" key={service._id}>
                                    <div className="service-inner d-flex">
                                        <div className="serivce-img me-4">
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                        <div className="service-title">
                                            <h4>{service.title}</h4>
                                            <span>{service.description}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* end Ervices Section */}

            {/* start Category sec */}

            <div className="category-sec mb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-title">
                                <h1>Shop by Category</h1>
                            </div>
                        </div>
                    </div>

                    <div className="category-slider-wrapper">
                        <button className="cat-prev">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="cat-next">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={15}
                            speed={800}
                            loop
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            navigation={{
                                prevEl: ".cat-prev",
                                nextEl: ".cat-next",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 5 },
                            }}
                        >
                            {categories.map((cat) => (
                                <SwiperSlide key={cat._id}>
                                    <div className="cate-img">
                                        <img src={cat.image} alt={cat.title} />
                                        <div className="cate-img-inner">
                                            <h4>{cat.title}</h4>
                                        </div>
                                        <button className="cate-btn">View More</button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* end Category sec */}

            {/* start best item sec */}

            <div className="best-sec mt-5 mb-5">
                <div className="container">
                    <div className="row g-3">
                        {ads.map((ad, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="best-item">
                                    <img src={ad.image} alt={ad.titleHighlight} />
                                    <div className="best-inner-text">
                                        <span>{ad.titleSmall}</span>
                                        <h3>
                                            {ad.titleMain} <strong>{ad.titleHighlight}</strong>
                                        </h3>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* end best item sec */}
        </>
    );
};

export default Home;
