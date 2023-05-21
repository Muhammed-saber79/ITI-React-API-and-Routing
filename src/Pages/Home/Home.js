import Nav from "../Shared/Nav/Nav";
import Footer from "./../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import './../Home/Home.css';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="my-5">''</div>
            <div className="container my-5 home">
                <h3 className="text-center my-3">Welcome To Our Website Home Page.</h3>
                <hr className="text-center w-75 m-auto"/>
            </div>
            {/* <Footer className="fixed-bottom"></Footer> */}
        </div>
    )
}

export default Home;