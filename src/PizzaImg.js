import pizza from "./pizza.jpg";
import "./PizzaImg.css"

const PizzaImg = ({x, y}) => {
    return <img 
    className="PizzaImg"
    alt="pizza"
    src={pizza} 
    style={{top: `${y}vh`, left:`${x}vw`, position:"absolute"}}/>
}

export default PizzaImg;