import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";
import loginSlice from "../redux/loginSlice";
import { useState } from "react";

export default function HomePage() {
  const { openclose } = useSelector((state) => state.popup);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  function handleSubmit(e){ 
    e.preventDefault();
    console.log(name, email, password)
  }

  return (
    <div className="flex flex-row">
        {/* LOGIN POPUP */}
        <Popup trigger={openclose} setTrigger={openclose} className="">
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col self-center">
              <label className="text-white">Name
                <input type="text" className="h-10 mt-10 ml-4 rounded-md p-2 text-black" name="name" value={name} onChange={e => setName(e.target.value)}/>
              </label>
              <label className="text-white">Email
                <input type="email" className="h-10 mt-10 ml-4 rounded-md p-2 text-black" name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
              <label className="text-white">Password
                <input type="text" className="h-10 mt-10 ml-4 rounded-md p-2 text-black" onChange={e => setPassword(e.target.value)} value={password}/>
              </label>
              <label className="text-white">Address
                <input type="text" className="h-10 mt-10 ml-4 rounded-md p-2 text-black" onChange={e => setAddress(e.target.value)} value={address}/>
              </label>
              <label className="text-white">Phone Number
                <input type="tel" className="h-10 mt-10 ml-4 rounded-md p-2 text-black" onChange={e => setPhone(e.target.value)} value={phone}/>
              </label>
              <input type={'submit'} className="bg-gray-50 h-10 w-40 mt-3 rounded-md"/>
              </div>
          </form>
        </Popup>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}
