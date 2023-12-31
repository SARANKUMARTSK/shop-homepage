import { useState } from "react";
import React from 'react'

function Card({cart,setCart,product}) {
    let [toggle,setToggle]=useState(true)
    return <>
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem" , "right": "0.5rem"}}>Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {/* <!-- Product price--> */}
                        ${product.price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                    {toggle?<button className="btn btn-outline-dark" onClick={()=>{setCart(cart+1);setToggle(prev=>!prev)}}>Add to cart</button>
                    :<button className="btn btn-outline-dark" onClick={()=>{setCart(cart-1);setToggle(prev=>!prev)}}>Remove From Cart</button>
                    }
                        </div>
                </div>  
            </div>
        </div>
    </>
}

export default Card