import {Link} from "react-router-dom";
import './../Nav/Nav.css';

const Nav = ()=>{
    return (
        <div className="nav fixed-top">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between p-3">
                        <Link to="/" className="text-decoration-none text-warning"> <h5>Logo</h5> </Link>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6  d-flex justify-content-between">
                            <ul className="list-unstyled d-flex flex-row mx-3">
                                <li className="mx-2">
                                    <Link to="/" className="text-decoration-none text-primary"> <h5>Home</h5> </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="/products" className="text-decoration-none text-primary"> <h5>Products</h5> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;