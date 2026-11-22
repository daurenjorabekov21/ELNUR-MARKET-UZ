import React, { useState } from "react";

export default function Slider() {
    let rasmlar = [
        "https://sun9-51.vkuserphoto.ru/impf/pWZ_GjfLTwJcGCZWVu_FjQQ30WjuJMQJf8cjDg/fUU5tXmG1Ks.jpg?size=1920x768&quality=95&crop=0,118,1797,718&sign=eb5af3d0e85e1864d8a034baff00286c&c_uniq_tag=5Cnvg0m1mI9OiglWKOE_p3HxEYGai8MGWV1x-R8l69k&type=cover_group",

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
            
                <img src={rasmlar[index]} className="rasm " />
              
            </div>
        </div>
    );
}