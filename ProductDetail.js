import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import './ProductDetail.css';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProductDetail();
    }, [id]);

    // Render stars based on the rating
    const renderStars = (rating) => {
        const totalStars = 5;
        let filledStars = Math.floor(rating); // Full stars
        let halfStars = rating % 1 !== 0 ? 1 : 0; // Half star if rating is not an integer
        let emptyStars = totalStars - filledStars - halfStars; // Remaining empty stars

        return (
            <>
                {[...Array(filledStars)].map((_, i) => (
                    <span key={`filled-${i}`} className="star">★</span> // Full star
                ))}
                {halfStars > 0 && <span className="star">☆</span>} 
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="star">☆</span> // Empty star
                ))}
            </>
        );
    };

    return (
        <div>
        <div className="product-detail">
            {product ? (
                <>
                    <img src={product.image_link} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="rating">
                        <span>Rating: </span>{renderStars(product.rating)} {/* Display rating */}
                    </div>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <Footer />
        </div>
    );
};

export default ProductDetail;
