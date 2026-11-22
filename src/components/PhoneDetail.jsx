import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";

export default function PhoneDetail() {
  const { id } = useParams();
  const [phone, setPhone] = useState({});
  const [soni, setSoni] = useState(1);

  useEffect(() => {
    fetch("https://market-backend-zeta.vercel.app/phones/" + id)
      .then((res) => res.json())
      .then((data) => setPhone(data));
  }, []);

  function qoshish() {
    let savat = JSON.parse(localStorage.getItem("cart")) || [];
    savat.push(phone);
    localStorage.setItem("cart", JSON.stringify(savat));
  }
  function qoshish() {
    let savat = JSON.parse(localStorage.getItem("cart")) || [];
    let bor = false;

    for (let i = 0; i < savat.length; i++) {
      if (savat[i].id == phone.id) {
        bor = true;
      }
    }
    if (bor == false) {
      savat.push(phone);
      localStorage.setItem("cart", JSON.stringify(savat));
    }
    alert("Savatga qo'shildi");
    function likeQosh() {
      let likes = JSON.parse(localStorage.getItem("likes")) || [];
      let bor = false;

      for (let i = 0; i < likes.length; i++) {
        if (likes[i].id == phone.id) {
          bor = true;
        }
      }

      if (bor == false) {
        likes.push(phone);
        localStorage.setItem("likes", JSON.stringify(likes));
      }

      alert("Likes ga qo'shildi");
    }
  }
  let narx = Number(String(phone.price || 0).split(" ").join("")) || 0;

  function likeQosh() {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    let bor = false;

    for (let i = 0; i < likes.length; i++) {
      if (likes[i].id == phone.id) {
        bor = true;
      }
    }

    if (bor == false) {
      likes.push(phone);
      localStorage.setItem("likes", JSON.stringify(likes));
    }

    alert("Likes ga qo'shildi");
  }
  return (
    <div className="">
      <Slider />
      <div className="box">
        <div className="kichik">
          <img src={phone.img} />
          <img src={phone.img} />
          <img src={phone.img} />
        </div>

        <img src={phone.img} className="katta" />

        <div>
          <h2>{phone.title}</h2>
          <p>{narx * soni}</p>
          <button onClick={() => soni > 1 && setSoni(soni - 1)}>-</button>
          <span>{soni}</span>
          <button onClick={() => setSoni(soni + 1)}>+</button>
          <button onClick={qoshish}>Savatga</button>
          <button onClick={likeQosh}>Like</button>
        </div>
      </div>
    </div>
  );
}