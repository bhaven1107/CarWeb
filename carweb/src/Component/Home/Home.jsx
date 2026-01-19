// Home.js
import "./Home.css";
import Header from "../header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import useHomeLogic from "./Homelogic";

const categories = [
    { id: 1, title: "Autoparts", image: "./assests/204_thumb.png" },
    { id: 2, title: "Engine Parts", image: "./assests/221_thumb.png" },
    { id: 3, title: "Exhaust Parts", image: "./assests/222_thumb.png" },
    { id: 4, title: "Brake Parts", image: "./assests/223_thumb.png" },
    { id: 5, title: "Body Parts", image: "./assests/204_thumb.png" },
];

const Home = () => {

    const { sliders, slidersLoading, services, servicesLoading } = useHomeLogic();

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

            <div className="category-sec mb-5">
                <div className="container">
                    {/* Section Title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="category-title">
                                <h1>Shop by Category</h1>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Slider */}
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
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                prevEl: ".cat-prev",
                                nextEl: ".cat-next",
                            }}
                            // આ લાઈન ઉમેરો જો બટન કામ ન કરતા હોય
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = ".cat-prev";
                                swiper.params.navigation.nextEl = ".cat-next";
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 5 },
                            }}
                        >
                            {categories.map((cat) => (
                                <SwiperSlide key={cat.id}>
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
        </>
    );
};

export default Home;
