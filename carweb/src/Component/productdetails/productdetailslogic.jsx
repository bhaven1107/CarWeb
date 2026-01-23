import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Services/authService";

const useProductDetailsLogic = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [stockLeft, setStockLeft] = useState(0);
    const [delivery, setDelivery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedDimension, setSelectedDimension] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPaperType, setSelectedPaperType] = useState(null);
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    useEffect(() => {
        if (product?.price) {
            setFinalPrice(product.price);
        }
    }, [product]);

    useEffect(() => {
        if (!product) return;

        let price = product.price;

        if (selectedSize?.price) price += selectedSize.price;
        if (selectedDimension?.price) price += selectedDimension.price;
        if (selectedColor?.price) price += selectedColor.price;
        if (selectedPaperType?.price) price += selectedPaperType.price;

        setFinalPrice(price);
    }, [
        selectedSize,
        selectedDimension,
        selectedColor,
        selectedPaperType,
        product
    ]);

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
        loading,
        finalPrice,
        selectedColor,
        setSelectedSize,
        setSelectedDimension,
        setSelectedColor,
        setSelectedPaperType
    };
};

export default useProductDetailsLogic;
