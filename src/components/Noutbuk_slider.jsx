import React, { useState } from "react";

export default function Noutbuk_slider() {
let rasmlar = [
  "https://media.istockphoto.com/id/1030811736/photo/soccer.jpg?s=612x612&w=0&k=20&c=EFENlfJO8roQlT2qhPKM4QFIcpitODxg5B1e-I4FMAk=",
  "https://media.istockphoto.com/id/1610631888/photo/kid-playing-soccer-in-local-park.jpg?s=612x612&w=0&k=20&c=z9uQNCEJE4E-l52r9hud0Cn_-vgGXamHP0JKoFhT9yQ="
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