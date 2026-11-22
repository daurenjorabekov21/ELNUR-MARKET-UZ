import { Route, Routes } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import Home from "./page/home/Home"
import Noutbuk from "./page/about/Sport"
import Sport from "./page/about/Sport"
import Kampyuterdetil from "./components/Kampyuterdetil"
import Kampyuter from "./page/kampyter/Kampyuter"
import Cart from "./components/Cart"
import Likes from "./components/Likes"
import PhoneDetail from "./components/PhoneDetail"
import Noutbukdetil from "./components/Noutbukdetail"
import Noutbukdetail from "./components/Noutbukdetail"
import Login from "./components/Login"
import Slider from "./components/Slider"
import Tepaga from "./page/Tepaga"
import Afzallik from "./page/Afzallik"
import Aksiya from "./page/Aksiya"
import Fikr from "./page/Fikr"
import Aloqa from "./page/Aloqa"
import Noutbuk_slider from "./components/Noutbuk_slider"
import Kmapyuter_slider from "./components/Kmapyuter_slider"
function App() {

  return (
    <>
      <Tepaga />

      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/kampyuter" element={<Kampyuter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/kampyuter" element={<Kampyuter />} />
          <Route path="/phone/:id" element={<PhoneDetail />} />
          <Route path="/noutbuk/:id" element={<Noutbukdetail />} />
          <Route path="/kampyuter/:id" element={<Kampyuterdetil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/slider " element={<Slider />} />
          <Route path="/tepaga" element={<Tepaga />} />
          <Route path="/afzallik" element={<Afzallik />} />
          <Route path="/aksiya" element={<Aksiya/>}/>
          <Route path="/fikr" element={<Fikr/>}/>
        <Route path="/aloqa" element={<Aloqa/>}/>
        <Route path="noutbuk_slider" element={<Noutbuk_slider/>}/>
        <Route path="/kmapyuter_slider" element={<Kmapyuter_slider/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
