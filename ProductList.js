import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './ProductList.css';
import Footer from './Footer';

const ProductList = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error
    const navigate = useNavigate();

    // Fetch all products when the component loads
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
                setProducts(response.data); // Store all fetched products
                setLoading(false); // Stop loading once data is fetched
            } catch (error) {
                setError("Failed to fetch products.");
                setLoading(false); // Stop loading even if there is an error
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this runs only once on mount

    // Filter products based on the search query
    const filteredProducts = searchQuery
        ? products.filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case insensitive search
          )
        : products; // If searchQuery is empty, return all products

    const goToProductDetail = (id) => {
        navigate(`/product/${id}`);
    };

    // Render stars based on the product rating
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

    if (loading) {
        return (
            <div className="loading">
                <p>Loading products...</p>
                <div className="spinner"></div> {/* You can replace this with a custom spinner */}
            </div>
        );
    }

    return (
        <div>
        <div className="product-list">
            <ImageSlider />
            {error ? (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            ) : filteredProducts.length === 0 ? (
                <p>No products found for "{searchQuery}". Please try another search.</p>
            ) : (
                filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image_link} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <div className="rating">
                            <span>Rating: </span>{renderStars(product.rating)} {/* Display rating */}
                        </div>
                        <button onClick={() => goToProductDetail(product.id)}>Book Now</button>
                        <button>Add to Cart</button>
                    </div>
                ))
            )}
           
        </div>
        <Footer />
        </div>
    );
};

export default ProductList;
