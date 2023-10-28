import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>What would you like have from VendingMachine?</h1>
            <p>Have some <Link to="/pizza">PIZZA</Link></p>
            <p>How about some <Link to="/water">WATER</Link></p>
            <p>You gotta have some <Link to="/candy">CANDY</Link></p>
        </div>
    )
}

export default VendingMachine;