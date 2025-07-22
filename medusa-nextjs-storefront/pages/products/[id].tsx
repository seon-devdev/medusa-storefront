import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProduct } from '../../lib/medusa';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const getProduct = async () => {
                try {
                    const data = await fetchProduct(id);
                    setProduct(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            getProduct();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading product: {error.message}</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.images[0].url} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.variants[0].prices[0].amount / 100}</p>
        </div>
    );
};

export default ProductDetail;