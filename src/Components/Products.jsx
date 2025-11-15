import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/browseProduct')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleViewDetail = (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.email) {
       
        navigate('/productDetail');
      } else {
        
        navigate("/signin");
      }
    } catch (err) {
      console.error("Error reading user from localStorage:", err);
      navigate("/signin");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-3 rounded shadow">
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p>{product.brand}</p>

            <button className="bg-blue-600 text-white px-3 py-1 mt-2 rounded">
              Add to Cart
            </button>

            <button
              onClick={() => handleViewDetail(product._id)}
              className="bg-gray-800 text-white px-3 py-1 mt-2 rounded ml-2"
            >
              View Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
