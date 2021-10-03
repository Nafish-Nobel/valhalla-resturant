import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.product);

    const { name, img, category, price,key,sell } = props.product;
    const cartIcon= <FontAwesomeIcon icon={faShoppingCart} />

    return (
        
        <div className="col-lg-4 py-2 card-style  ">
            <div className="card h-100 text-center border-2 border-secondary shadow ">
                <img className="img-fluid rounded-2" src={img} alt="" />
                <div className="card-body ">
                    <div className="card-title border ">
                    <h5 className="fw-thin">Category: {category}</h5>
                        <h3 className="fw-bold">Name: {name}</h3>
                        <h4 className="fw-bold">Price: $<span className="text-danger">
                        {price}</span> </h4>
                        <h5 className="fw-bold">Code: <span className="text-success"> {key} </span></h5>
                        <h5 className="fw-bold">Sell: <span className="text-danger">
                        {sell}</span> </h5>
                    </div>
                    
                </div>
                <div className="card-footer bg-light border-0 ">
                    <button type="button" id="btn-style" class="btn btn-dark" onClick={() => props.addTo(props.product)} >
                        <span className="text-danger"> {cartIcon} </span> Order</button>
                    </div>
            </div>
        </div>
        

        
    );
};

export default Product;