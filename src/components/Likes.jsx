import React, { useState, useEffect } from "react";

export default function Likes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    setItems(likes);
  }, []);

  function ochirish(index) {
    let yangi = [];
    for (let i = 0; i < items.length; i++) {
      if (i != index) {
        yangi.push(items[i]);
      }
    }
    setItems(yangi);
    localStorage.setItem("likes", JSON.stringify(yangi));
  }

  return (
    <div className="cart_box">
      <h2>Likes</h2>

      {items.map((item, index) => (
        <div key={index} className="cart_item">
          <img src={item.img} className="cart_img" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={() => ochirish(index)}>O'chirish</button>
          </div>
        </div>
      ))}
    </div>
  );
}