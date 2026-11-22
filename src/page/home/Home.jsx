import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../components/Slider';
export default function Home() {
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    fetch("https://market-backend-zeta.vercel.app/phones")
      .then((res) => res.json())
      .then((alldata) => {
        setdata(alldata);
      });
  }, []);

  return (
    <div>
      <Slider />

      <div className='box_1'>
         
        {data.map((item) => (
          <div key={item.id}>
            <Link to={"/phone/" + item.id}>
              <img className='img_1' src={item.img} alt="" />
            </Link>
            <h3 className='title_1'>{item.title}</h3>
            <p className='text_1'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}