import { Link, useParams } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import axiosInstance from "./../../Axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

const ProductDetails = ()=>{
    const productId = useParams().id;

    useEffect(()=>{
        getProductDetails();
    }, [])

    const [productDetails, setProductDetails] = useState(null);
    
    const getProductDetails = async ()=>{
        await axiosInstance.get(`/products/${productId}`)
        .then((res)=>{
            setProductDetails(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return productDetails ? (
        <>
            <Nav/>
            <div className="my-5">''</div>
            <div className="container">
                <div className="row my-5">

                    {
                        <>
                        <h3 className="text-center">Product Details</h3>
                        <hr className="w-75 mx-auto my-3"></hr>
                        <div className="card shadow h-100 d-flex flex-column">
                            <img className="card-img-top flex-grow-1" src={productDetails.thumbnail} alt="Title" />
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title">{productDetails.title}</h4>
                                <p className="card-text">{productDetails.description}</p>
                            </div>
                        </div>
                        <hr className="w-75 mx-auto my-3"></hr>
                        
                        {productDetails.images.map((url)=>(
                            <div className="col-4 my-3 h-100 d-flex flex-column">
                                <img className="card-img-top flex-grow-1" src={url} alt="Title" />
                            </div>
                        ))}
                        </>
                    }

                </div>
            </div>
            <Footer></Footer>
        </>
    ) 
    : 
    (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            <br/>
            <h4>Loading...</h4>
        </div>
    )
}

export default ProductDetails;