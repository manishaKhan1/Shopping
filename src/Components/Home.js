import React from 'react'
import Header from './Header'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { NavLink, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from './Footer';
// Home page of the e-comerce site
const Home = () => {
    return (
        <>

            {/* <div className="banner_section layout_padding">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="banner_taital">Best <br /> Electronics Devices <br />Service</h1>
                                        <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                                        <div className="image_2">
                                        <NavLink to='/shop' className="text-decoration-none mx-3"><img src={img2} /></NavLink>
                                            </div>
                                        <div className="btn_main">
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_1">
                                        <NavLink to='/shop' className="text-decoration-none mx-3"><img src={img1} /></NavLink>
                                            
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">
                                <h1 className="about_taital">About Us</h1>
                                <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised </p>
                               
                                <div className="image_2">
                                <NavLink to='/shop' className="text-decoration-none mx-3"><img src={img3} /></NavLink>
                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} />
                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png" />
                        </NavLink>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Title><NavLink to='/shop'><Card.Img style={{ height: "300px" }} src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg" /></NavLink></Card.Title>

                    <Card.Img style={{ height: "300px" }} src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Card>



                <Card>
                    <Card.Img variant="top" style={{ height: "300px" }} src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg" />
                        </NavLink>
                    </Card.Body>

                </Card>
            </CardGroup> */}

                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>Best Electronics Services</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        The One-stop Electronics Device Shopping Destination. E-commerce is
                                        revolutionizing the way we all shop.
                                    </Card.Text>
                                    <NavLink to="/shop">
                                        <button className="button-49">Shop now</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>

                   
                </div>
                </div>

                <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} />

                </Card>

                <Card>
                    <Card.Img style={{ height: "300px" }} src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Card>



                <Card>
                    <Card.Img variant="top" style={{ height: "300px" }} src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                </Card>
            </CardGroup>


            {/* <Card className="bg-dark text-white">

                <Card.Img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                <Card.ImgOverlay>
                    <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                    <Card.Text>
                        The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                    </Card.Text>
                    <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                </Card.ImgOverlay>
            </Card> */}

            {/* <Card className="bg-dark text-white">
            
                <Card.Img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                
                <Card.ImgOverlay>
                
                    <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                    <Card.Text>
                    The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                    </Card.Text>
                    <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                    </Card.ImgOverlay>
                    
                    
            </Card> */}



            {/* <div className="d-grid gap-3">

                <div className="p-2 bg-light border">
                    <Card className="bg-dark text-white">
                    <Card.Img style={{width: "100%", height: "500px", backgroundSize: "cover"}} src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                    <Card.ImgOverlay>
                        <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                        <Card.Text>
                            The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                        </Card.Text>
                        <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                    </Card.ImgOverlay>
                </Card>  
                </div>

                <div className="p-2 bg-light border">
                    <Card className="bg-dark text-white">
                    <Card.Img style={{width: "100%", height: "300px", backgroundSize: "cover"}} src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80" />

                    <Card.ImgOverlay>
                        <NavLink to="/contact"><button className="button-49">Contact Us</button></NavLink>
                    </Card.ImgOverlay>
                </Card>  
                </div>
                
            </div> */}

            {/* <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} />
                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png" />
                        </NavLink>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Title><NavLink to='/shop'><Card.Img src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg" /></NavLink></Card.Title>
                    <Card.Img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image" />
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg" />
                        </NavLink>
                    </Card.Body>

                </Card>
            </CardGroup> */}


            {/* chatgpt code */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>Best Electronics Services</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        The One-stop Electronics Device Shopping Destination. E-commerce is
                                        revolutionizing the way we all shop.
                                    </Card.Text>
                                    <NavLink to="/shop">
                                        <button className="button-49">Shop now</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Home
