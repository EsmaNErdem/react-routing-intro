import { Link } from "react-router-dom";

const Candy = () => {
    return (
        <div>
            <h1>You gotta be careful how much candy you eat!</h1>
            <p><Link to="/">Go back!</Link></p>
        </div>
    )
}

export default Candy;