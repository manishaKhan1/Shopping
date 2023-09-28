import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSproductctor } from 'react-redux'
import { ADD, DELETE, DproductTE, REMOVE } from '../redux/actions/action'
import Header from './Header'
import { useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItems = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.cartreducer.carts)
    const [price, setPrice] = useState(0);

    const history = useNavigate();
    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    //delete from the cart
    const dlt = (id) => {
        dispatch(DELETE(id));
        //history("/");
        toast.error('Product has been removed from cart', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    //total price
    const total = () => {
        let price = 0;
        data.map((ele, k) => {
            price = ele.price * ele.quantity + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])


    return (
        <>
            
            <h2 className='text-center'>My Cart</h2>
            <div className="cartWrapper py-md-5 py-4">

                {data.map((product, index) => (
                    <div className="px-4 rounded-3" key={product.id}>
                        <div className="container py-4">
                            <div className="row justify-content-center">
                                <div className="col-md-10 shadow cart-box rounded">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <NavLink to={`/productinformation/${product.id}`}> <img src={product.img} height="180px" width="150px" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} /></NavLink>
                                            <p></p>
                                            <p></p>
                                            <p><strong>Product Details:</strong> {product.details}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <h3>{product.name}</h3>
                                            
                                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{product.rating} ★	</span></p>

                                            <p>
                                                <strong style={{ fontSize: "25px" }}>₹{product.price}</strong>
                                                <span style={{ textDecoration: 'line-through', marginLeft: "10px" }}>{product.off}</span> <span style={{ marginLeft: "10px", color: "#4CAF50" }}>{product.discount}</span>
                                            </p>

                                            <p> <strong>Total</strong>  :₹  {product.price * product.quantity}</p>
                                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                <span className="button-8" style={{ fontSize: 24 }} onClick={product.quantity <= 1 ? () => dlt(product.id) : () => remove(product)}>-</span>
                                                <span className="button-8" style={{ fontSize: 22 }}>{product.quantity}</span>
                                                <span className="button-8" style={{ fontSize: 24 }} onClick={() => send(product)}>+</span>


                                            </div>
                                            <p></p>
                                        </div>

                                        <div className="col-md-2">
                                            <p><span ><i className='fas fa-trash' onClick={() => dlt(product.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span>
                                            <ToastContainer />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="container">
                    <div className="row">
                        {
                            data.length > 0 ?
                                (
                                    <Card body style={{ backgroundColor: "antiquewhite" }}>
                                        <p className='text-center' style={{ fontSize: "25px" }}><strong>Total Amount:</strong>  ₹{price}</p>
                                    </Card>

                                )
                                :
                                (<div>
                                    <img src="./cart.gif" alt="" className='emptycart_img' style={{ display: "block", marginLeft: "auto", marginRight: " auto", width: " 30%" }} />
                                    <p style={{ fontSize: 22, textAlign: 'center' }}>Cart is empty</p>
                                </div>)

                        }

                    </div>

                </div>

            </div>

            <Footer/>

        </>
    )

}


export default CartItems
