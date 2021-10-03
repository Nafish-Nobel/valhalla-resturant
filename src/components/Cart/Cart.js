    import React from 'react';
    import ('./Cart.css')
    const Cart = (props) => {
    
        const { cart } = props;
        let total = 0;
        for (const product of cart)
        {
            total = total + product.price;
        }
        
        

        return (
            <div className=" shadow px-3">
                
                <h3>Orders: <span className="text-success fw-bold">{props.cart.length}</span></h3>

                <h3>Total: $<span className="text-danger fw-bold">{total}</span></h3>

                
            <ul className="py-2">
                {
                    cart.map(onePerson =><li className="onePerson"> <span className="bg-info fw-bold rounded-1 px-3 ">{onePerson.name}</span> </li>)
                }
                </ul>
            
            </div>

            

        );
    };

    export default Cart;