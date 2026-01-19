// useHomeLogic.js
import { useEffect, useState } from "react";
import { getHomeSliders, getHomeServices } from "../../Services/authService";

const useHomeLogic = () => {
    // Sliders
    const [sliders, setSliders] = useState([]);
    const [slidersLoading, setSlidersLoading] = useState(true);

    // Services
    const [services, setServices] = useState([]);
    const [servicesLoading, setServicesLoading] = useState(true);

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

    return { sliders, slidersLoading, services, servicesLoading };
};

export default useHomeLogic;
