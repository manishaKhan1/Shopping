import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardData from './CardData'
import "./style.css";
import { useDispatch } from 'react-redux';
// import { ADD } from '../redux/actions/action';
import Header from './Header';
import { ADD } from '../redux/actions/action';
import CardsDetails from './CardDetails';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Shop items
const Cards = () => {

  
    const [data, setData] = useState([]); 
    

    //fetch data from the json server
    useEffect(() => {
        fetch(" http://localhost:3030/posts").then((res) => {
            return res.json();
        }).then((resp) => {
          setData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    //const [data, setData] = useState(CardData);
    
    console.log(CardData)
    const dispatch = useDispatch()

//send item to the cart
  const send = (e)=>{
     console.log(e);
    dispatch(ADD(e));
    toast.success('Product has been added to cart', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const navigate=useNavigate()
  function detailsPageShow(id){
    navigate("/productinformation/"+id)
  }
  
    return (
      <>
      
      <div className='container mt-3'>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none",boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}} className="mx-2 mt-4 card_style" key={id}>
                <NavLink to={`/productinformation/${element.id}`}><Card.Img variant="top" src={element.img} style={{height:"16rem"}} className="mt-3" /></NavLink>
                  <Card.Body>
                 <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    
                    <div className="button_div d-flex justify-content-center" style={{margin:"10px"}}>
                    <button className="button-card-details" role="button"   
                      onClick={()=>detailsPageShow(element.id)}>Product Details</button>
                    
                    {/* <NavLink  className="text-decoration-none text-light mx-3"><Button variant="primary"  
                     className='col-lg-12' onClick={()=>detailsPageShow(element.id)}>Product Details</Button></NavLink> */}
                    </div> 

                    <div className="button_div d-flex justify-content-center">
                    <button className="button-card" role="button"  
                      onClick={()=> send(element)}
                     >Add to Cart</button>
                     <ToastContainer />
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
    </>
    );
      
}

export default Cards