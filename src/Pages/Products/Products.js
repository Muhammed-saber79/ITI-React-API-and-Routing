import { useEffect, useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import axiosInstance from "./../../Axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

const Products = ()=>{
    const [products, setProducts] = useState(null);

    // Use the useEffect...
    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = async () => {
        await axiosInstance.get('/products')
        .then((res)=>{
            setProducts(res.data.products);
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return products ? (
        <>
            <Nav/>
            <div className="my-5">''</div>
            <h3 className="text-center my-3">Here are our Products</h3>
            <div className="container">
                <hr className="text-center w-75 m-auto"/>
                <div className="row my-5">

                    {products.map((product)=> (
                        <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={product.id}>
                            <div className="card shadow h-100 d-flex flex-column">
                                <Link to={`/products/${product.id}`}>
                                    <img className="card-img-top flex-grow-1" src={product.thumbnail} alt="Title" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <h4 className="card-title">{product.title}</h4>
                                    <p className="card-text">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Footer/>
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

export default Products;