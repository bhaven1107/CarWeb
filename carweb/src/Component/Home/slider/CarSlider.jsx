import React, { useEffect, useState } from "react";
import "./CarSlider.css";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
        title: "Luxury Performance",
        subtitle: "Experience the Future of Speed"
    },
    {
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
        title: "Elite Engineering",
        subtitle: "Designed for True Car Lovers"
    },
    {
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
        title: "Power & Elegance",
        subtitle: "Where Style Meets Performance"
    }
];

const CarSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="car-slider">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === current ? "active" : ""}`}
                        key={index}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="overlay">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <button>Explore Cars</button>
                        </div>
                    </div>
                ))}

                <div className="dots">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={i === current ? "dot active-dot" : "dot"}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
            <br />
            <br /><br /><br />  <br />
        </>
    );
};

export default CarSlider;
