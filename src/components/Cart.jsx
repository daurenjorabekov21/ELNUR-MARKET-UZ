import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    function ochirish(index) {
        let yangi = [];
        for (let i = 0; i < items.length; i++) {
            if (i != index) yangi.push(items[i]);
        }
        setItems(yangi);
        localStorage.setItem("cart", JSON.stringify(yangi));
    }

    return (
        <div>
            <h2>Savatcha</h2>

            {items.map((item, index) => (
                <div key={index}>
                    <img className="img" src={item.img}  />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <div className="cart_box">
                        <button onClick={() => ochirish(index)}>O'chirish</button>
                        <Link to="/login">
                            <button>Sotib olish</button>
                        </Link>
                    </div>
                </div>
            ))}


        </div>
    );
}