// Home.js
import "./Home.css";
import Header from "../header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import useHomeLogic from "./Homelogic";
import Footer from "../footer/footer";

const Home = () => {

    const { sliders, slidersLoading,
        services, servicesLoading,
        categories, Categoryloading,
        ads, adsLoading,
        collections, collectionsLoading,
        testimonials, Brands } = useHomeLogic();

    return (
        <>
            <Header />
            <div className="home-body">
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

                <div className="category-sec">
                    <div className="container">
                        <h1 className="category-title">Shop by Category</h1>

                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            loop={true}
                            allowTouchMove={true}
                            className="marquee-swiper"
                        >
                            {[...categories, ...categories].map((cat, i) => (
                                <SwiperSlide key={i} className="marquee-slide">
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

                {/* end Category sec */}

                {/* start best item sec */}

                <div className="best-sec">
                    <div className="row g-4">
                        {ads.slice(0, 3).map((ad, index) => (
                            <div
                                key={index}
                                className={`col-lg-${index === 1 ? 6 : 3} col-md-6`}
                            >
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
                {/* end best item sec */}

                {/* start collection section */}

                <div className="collection-sec">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="category-title">
                                    <h1>Featured <span>Collection</span></h1>
                                </div>
                            </div>

                            {collections.map((item) => (
                                <div className="col-lg-3 mb-4 col-md-4 col-sm-6" key={item._id}>
                                    <div className="collection-item">

                                        {item.isNew && <div className="badge new">NEW</div>}
                                        {item.onSale && <div className="badge sale">ON SALE!</div>}

                                        <img src={item.image} alt={item.title} />

                                        <h4>{item.title}</h4>
                                        <p className="price">${item.price}.00</p>

                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* end collection section */}

                {/* start Testimonial sec */}

                <div className="testi-sec">
                    <div className="container">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop={true}
                            className="testi-slider"
                        >
                            {testimonials.map((t) => (
                                <SwiperSlide key={t._id}>
                                    <div className="testi-item">
                                        <div className="testi-left">
                                            <img src={t.image} alt={t.name} />
                                            <h4>{t.name}</h4>
                                            <span>{t.role}</span>
                                        </div>

                                        <div className="testi-right">
                                            <p>{t.message}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* end testimonial sec */}

                {/* start brand sec */}

                <div className="brand-sec">
                    <div className="container">
                        <div className="category-title">
                            <h1>Shop By <span>Brand</span></h1>
                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={5}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                480: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                992: { slidesPerView: 5 },
                            }}
                            navigation
                            className="brand-slider"
                        >
                            {Brands.map((brand) => (
                                <SwiperSlide key={brand._id} className="brand-slide">
                                    <img src={brand.image} alt={brand.title} />
                                    {/* <p className="brand-title">{brand.title}</p>  */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* end brand sec  */}
            </div>

            <Footer />

        </>
    );
};

export default Home;
