// useHomeLogic.js
import { useEffect, useState } from "react";
import { getHomeSliders, getHomeServices, getAllCategories, getAllAds } from "../../Services/authService";

const useHomeLogic = () => {
    // Sliders
    const [sliders, setSliders] = useState([]);
    const [slidersLoading, setSlidersLoading] = useState(true);

    // Services
    const [services, setServices] = useState([]);
    const [servicesLoading, setServicesLoading] = useState(true);

    // Categories
    const [categories, setCategories] = useState([]);
    const [Categoryloading, setLoading] = useState(false);

    // Ads
    const [ads, setAds] = useState([]);
    const [adsLoading, setAdsLoading] = useState(true);

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

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const res = await getAllCategories();
            setCategories(res.data.data);
        } catch (error) {
            console.error("Error fetching categories", error);
        } finally {
            setLoading(false);
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
            setAds(res?.data?.data || []);
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



    return {
        sliders, slidersLoading,
        services, servicesLoading,
        categories, Categoryloading,
        ads, adsLoading
    };
};

export default useHomeLogic;
