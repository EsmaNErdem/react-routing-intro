import { Link } from "react-router-dom";
import React, { useState } from "react";
import PizzaImg from "./PizzaImg";

const getRandom = (min=0, max=95) => (
    Math.random() * (max - min) + min
)

const Pizza = () => {
    const [pizza, setPizza] = useState([])

    const handleClick = () => {
        setPizza(p => [...p, { x:getRandom(), y:getRandom() }])
    }

    return (
        <div>
            <h1>Pizza eaten {pizza.length}</h1>
            <button onClick={handleClick}>Eat Pizza</button>
            <p><Link to="/">Go back!</Link></p>
            {pizza.map((p, i)=>(
                <PizzaImg key={i} x={p.x} y={p.y}/>
                ))
            }
        </div>
    )
}

export default Pizza; 