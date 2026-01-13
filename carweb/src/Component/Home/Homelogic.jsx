// useHomeLogic.js
import { useEffect, useState } from "react";
import { getHomeSliders } from "../../Services/authSservice";

const useHomeLogic = () => {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHomeSliders()
            .then((res) => {
                if (res.data.status) {
                    setSliders(res.data.data);
                }
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { sliders, loading };
};

export default useHomeLogic;
