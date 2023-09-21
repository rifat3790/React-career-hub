import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <Link to="/"><button className="m-5 btn btn-secondary">Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;