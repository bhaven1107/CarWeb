import "./Home.css";
import Header from "../header/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import HomeLogic from "./Homelogic";
import useHomeLogic from "./Homelogic";

const Home = () => {

    const { sliders, loading } = useHomeLogic();

    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    return (
        <>
            <Header />

            <div className="hero-sec">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {sliders.map((item) => (
                        <SwiperSlide key={item._id}>
                            <div className="hero-img">
                                <img
                                    src={item.imageUrl || item.imageBase64}
                                    alt={item.title}
                                />

                                <div className="hero-inner-text">
                                    <p>{item.title}</p>
                                    <button>SHOP NOW</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Home;
