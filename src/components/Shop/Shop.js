import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import('./Shop.css');

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    const addTo = products => {
        const newCart = [...cart, products]
        setCart(newCart)

   }
    return (
        <div className="containear bg-light ">
            <div className="row gx-5">
                <div className="col-lg-9 ">
                    <h2 className="bg-success text-success">.</h2>
                <h4 className="shop-title bg-warning text-center fw-bold ">Choose Your Food And Order</h4>
                    <div className="row gx-2 px-3">
                        {
                        products.map(product => <Product
                                key={product.key}
                                product={product}
                                addTo={addTo}
                            ></Product>)
                }
                </div>
            </div>
                <div className="col-lg-3 bg-light">
                    <h4 className="fw-bold bg-success p-4 text-center text-white">Your Orders</h4>
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
        </div>
        

    );
};

export default Shop;