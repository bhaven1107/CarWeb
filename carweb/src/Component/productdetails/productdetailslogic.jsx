import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Services/authService";

const useProductDetailsLogic = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [stockLeft, setStockLeft] = useState(0);
    const [delivery, setDelivery] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await getProductDetails(id);
            setProduct(res.data.data);
            setStockLeft(res.data.stockLeft);
            setDelivery(res.data.delivery);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        product,
        stockLeft,
        delivery,
        loading
    };
};

export default useProductDetailsLogic;
