import React from 'react'
import { Link } from 'react-router-dom';
import Noutbuk_slider from "../../components/Noutbuk_slider";
export default function Sport() {
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    fetch("https://market-backend-zeta.vercel.app/sport")
      .then((res) => res.json())
      .then((alldata) => {
        setdata(alldata);
      });
  }, []);
  return (
    <div>
    <Noutbuk_slider/>
      <div className='box_2'>
        
        {data.map((item) => (
          <div key={item.id}>
            <Link to={"/noutbuk/" + item.id}>
            <img className='img_12' src={item.img} alt="" /></Link>
           
            <h3 className='title_1_1'>{item.title}</h3>
            <p className='sport_text'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
