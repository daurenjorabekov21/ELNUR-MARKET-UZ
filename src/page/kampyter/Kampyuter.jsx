import React from "react";
import { Link } from "react-router-dom";
import Kmapyuter_slider from "../../components/Kmapyuter_slider"
export default function Kampyuter() {

  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    fetch("https://market-backend-zeta.vercel.app/computers")
      .then((res) => res.json())
      .then((alldata) => {
        setdata(alldata);
      });
  }, []);

  return (
    <div>
      <Kmapyuter_slider/>
      <div className="box_2">
        {data.map((item) => (
          <div key={item.id}>
            <Link to={"/kampyuter/" + item.id}>
              <img className="img_12" src={item.img} alt="" />
            </Link>
            <h3 className="title_1_1">{item.title}</h3>
            <p className="sport_text">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}