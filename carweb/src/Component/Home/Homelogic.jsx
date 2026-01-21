// useHomeLogic.js
import { useEffect, useState } from "react";
import { getHomeSliders, getHomeServices, getAllCategories, getAllAds, getAllCollections, getAllTestimonials, getAllBrands } from "../../Services/authService";

const useHomeLogic = () => {
    // Sliders
    const [sliders, setSliders] = useState([]);
    const [slidersLoading, setSlidersLoading] = useState(true);

    // Services
    const [services, setServices] = useState([]);
    const [servicesLoading, setServicesLoading] = useState(true);

    // Categories
    const [categories, setCategories] = useState([]);
    const [Categoryloading, CategoryLoading] = useState(false);

    // Ads
    const [ads, setAds] = useState([]);
    const [adsLoading, setAdsLoading] = useState(true);

    // collections
    const [collections, setCollections] = useState([]);
    const [collectionsLoading, setCollectionsLoading] = useState(true);

    // Testimonials
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialsLoading, setTestimonialsLoading] = useState(true);

    // Brands
    const [Brands, setBrands] = useState([]);
    const [BrandsLoading, setBrandsLoading] = useState(true);

    // Fetch sliders
    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const res = await getHomeSliders();
                if (res.data.status) setSliders(res.data.data);
            } catch (err) {
                console.error("Error fetching sliders:", err);
            } finally {
                setSlidersLoading(false);
            }
        };
        fetchSliders();
    }, []);

    // Fetch services
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await getHomeServices();
                if (res.data.status) setServices(res.data.data);
            } catch (err) {
                console.error("Error fetching services:", err);
            } finally {
                setServicesLoading(false);
            }
        };
        fetchServices();
    }, []);

    // fetch categories
    const fetchCategories = async () => {
        try {
            CategoryLoading(true);
            const res = await getAllCategories();
            setCategories(res.data.data);
        } catch (error) {
            console.error("Error fetching categories", error);
        } finally {
            CategoryLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetch Ads
    const fetchAds = async () => {
        try {
            const res = await getAllAds();
            console.log("ads:", ads);
            setAds(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            console.error("Error fetching ads:", err);
            setAds([]);
        } finally {
            setAdsLoading(false);
        }
    };
    useEffect(() => {
        fetchAds();
    }, []);

    // fetch collections
    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await getAllCollections();
                setCollections(res.data.data);
            } catch (err) {
                console.error("Error fetching collections:", err);
            } finally {
                setCollectionsLoading(false);
            }
        };

        fetchCollections();
    }, []);

    // Fetch Testimonial
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await getAllTestimonials();
                setTestimonials(res.data); // assuming getAllTestimonials returns res.data
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            } finally {
                setTestimonialsLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    // Fetch Brands
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await getAllBrands();
                setBrands(res.data); 
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            } finally {
                setBrandsLoading(false);
            }
        };

        fetchBrands();
    }, []);

    return {
        sliders, slidersLoading,
        services, servicesLoading,
        categories, Categoryloading,
        ads, adsLoading,
        collections, collectionsLoading,
        testimonials, testimonialsLoading,
        Brands,BrandsLoading
    };
};

export default useHomeLogic;
