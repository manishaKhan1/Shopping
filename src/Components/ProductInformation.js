import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { NavLink, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';
import {
    Container,
    List,
} from 'semantic-ui-react'

import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import Header from './Header';
import { MdLocalOffer } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import { FcCurrencyExchange } from 'react-icons/fc';
import { SiCashapp } from 'react-icons/si';
import { BsTruck } from 'react-icons/bs';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHighlight } from 'react-icons/ai';

export const ProductInformation = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/posts/" + id).then((result) => {
            result.json().then((res) => {
                setData(res);
            })
        })
    }, [])

    const dispatch = useDispatch()

//send item to the cart
  const send = (e)=>{
     console.log(e);
    dispatch(ADD(e));
    toast.success('Product has been added to cart', {
        position: toast.POSITION.TOP_CENTER
    });
  }

    return (
        <>

            {/* <div className="container mt-2">
        
        <NavLink to='/shop' className="text-decoration-none mx-3"><button>🔙</button></NavLink>
          <h2 className='text-center'>Item Details</h2>
  
          <section className='container mt-3'>
            <div className="iteamsdetails">
                    <>
                      <div className="items_img">
                        <img src={data.img} alt="" />
                      </div>
  
                      <div className="details">
                        <Table>
                          <tr>
                            <td>
                              <p> <strong>Product</strong>  : {data.name}</p>
                              <p> <strong>Price</strong>  : ₹{data.price}</p>
                            </td>
                            <td>
                              <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{data.rating} ★	</span></p>
                              <p><strong>Product Details :</strong> <span >{data.details}	</span></p>
                            </td>
                          </tr>
                        </Table>
                        
                      </div>
  
                    </>
            </div>
          </section>
        </div> */}
 
            {/* <div>
                <Container text style={{ marginTop: '7em' }}>

                <Image src={data.img} style={{ marginTop: '2em'}} />

                    <h1>{data.name}</h1>

                    <p>{data.details}</p>

                    <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{data.rating} ★</span>{data.review}</p>

                    <p></p>

                    <p><strong>Offers & Coupons</strong></p>
                    <p><span></span></p>


                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />

                </Container>

           
                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 1' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 2' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Group 3' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header inverted as='h4' content='Footer Header' />
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid>


                        <Divider inverted section />
                        <Image centered size='mini' src='/logo.png' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div> */}

           
        
            <Segment>
                <Grid columns={2} relaxed='very'>
                
                <Grid.Column>
                        <p>
                            <Image src={data.img} style={{ marginTop: '2em',border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", display: "block", marginLeft: "auto", marginRight: "auto"}} />
                        </p>
                        <div className="button_div d-flex justify-content-center">
                        <button className="button-28" role="button" onClick={()=> send(data)}>Add To Cart</button>
                        <ToastContainer />
                        </div>
                        
                        <NavLink to='/cartitems' className="text-decoration-none mx-3"><button className="button-29" role="button">Go To Cart</button></NavLink>
                        <NavLink to='/shop' className="text-decoration-none mx-3"><button className="button-89">🔙 </button></NavLink>
                        

                    </Grid.Column>
                
                    


                    <Grid.Column>
                        <h1>{data.name}</h1>

                        <p>{data.details}</p>

                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{data.rating} ★</span>{data.review}</p>

                        <p></p>
                        <p></p>
                        <p>
                            <strong style={{fontSize: "25px"}}>₹{data.price}</strong>
                            <span style={{textDecoration: 'line-through', marginLeft: "10px"}}>{data.off}</span> <span style={{marginLeft: "10px", color:"#4CAF50"}}>{data.discount}</span>
                        </p>

                        <p><strong>Available offers</strong></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer1}</span></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer2}</span></p>
                        <p ><span style={{ color:"#4CAF50"}}><MdLocalOffer/></span><span>{data.offer3}</span></p>

                        
                        <p style={{fontSize: "18px"}}><strong>Specifications</strong></p>
                        <p ><b>Model Number:</b> <span>{data.highlights1}</span></p>
                        <p ><b>Type:</b> <span>{data.highlights2}</span></p>
                        <p ><b>Power Source:</b> <span>{data.highlights3}</span></p>
                        <p ><b>Warranty:</b> <span>{data.Warranty}</span></p>
                        

                        <p style={{fontSize: "18px"}}><strong>Highlights</strong></p>
                        <p ><AiFillHighlight/>{data.highlights4}</p>
                        <p ><AiFillHighlight/>{data.highlights5}</p>
                        <p ><AiFillHighlight/>{data.highlights6}</p>
                        <p ><AiFillHighlight/>{data.highlights7}</p>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>

            {/* footer */}
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <List horizontal inverted divided link size='small'>

                            <List.Item as='a' href='#'><TbExchange style={{ fontSize: 20, cursor: "pointer", color:"orange" }}/>7 Days Replacement Policy</List.Item>

                            <List.Item as='a' href='#'><SiCashapp style={{ fontSize: 20, cursor: "pointer", color:"green" }}/>Cash on Delivery Avaible</List.Item>

                            <List.Item as='a' href='#'><BsTruck style={{ fontSize: 20, cursor: "pointer"}}/>Free shipping on all orders above Rs.499</List.Item>

                            <List.Item as='a' href='#'><FcCurrencyExchange style={{ fontSize: 20, cursor: "pointer" }}/>GST invoice available</List.Item>

                            <List.Item as='a' href='#'><RiSecurePaymentFill style={{ fontSize: 20, cursor: "pointer" , color:"pink"}}/>100% secure payment</List.Item>
                            
                        </List>
                    </Container>
                </Segment>
        </>
    )
}
