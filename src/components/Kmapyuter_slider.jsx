import React, { useState } from "react";

export default function Kmapyuter_slider() {
let rasmlar = [
  "https://images.unsplash.com/photo-1742199009963-c028d0c5a603?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://preview.redd.it/pc-gaming-setup-20-yo-v0-8f1c0cqhjiec1.jpg?width=4032&format=pjpg&auto=webp&s=e256725e15e94384a71d7c611b00f7d3cafd60ca"
];

    const [index, setIndex] = useState(0);

    function oldinga() {
        if (index < rasmlar.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function orqaga() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(rasmlar.length - 1);
        }
    }

    return (
        <div>
            <input className="input_1" type="text" placeholder="Qidirish..."  />

            <div className="box">
            
                <img src={rasmlar[index]} className="rasm_1 " />
              
            </div>
        </div>
    );
}