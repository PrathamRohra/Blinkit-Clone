import logo from '../../src/assets/blinkit-white.svg';
import { FaSearch } from "react-icons/fa";
import { useDispatch  } from 'react-redux';
import { popup } from '../redux/loginSlice';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  const dispatch = useDispatch();

  return (
    <div className="h-20 shadow-sm flex flex-row w-screen">
        {/* LOGO */}
        <img src={logo} alt="logo" className="w-60 border border-b-0 border-t-0" />
        
        {/* LOCATION & DELIVERY */}
        {/* <div className="flex flex-col p-4 w-56 ml-5">
            <h4 className="font-bold">Temporarily Closed</h4>
            
            <div className="flex flex-row">
                <p>Location</p>
                <button className="bg-yellow-300 font-bold ml-2">V</button>
            </div>
        </div> */}

        {/* SEARCH */}
        <div className="p-4">
            <input type={'text'} className="border shadow-sm rounded-md w-96 h-12 p-4 focus:outline" placeholder='Search "Curd"'/>
        </div>

        {/* LOGIN */}
        <div className='p-7 ml-4'>
            <button onClick={()=> dispatch(popup())}>Login</button>
        </div>

        {/* CART */}
        <div className='p-5'>
            <a href='/cart'>
                <button className="bg-green-600 w-36 h-10 p-2 text-white rounded-md">My Cart</button>
            </a>
        </div>
        
    

    </div>
  )
}
