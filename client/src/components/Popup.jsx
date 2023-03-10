import React from 'react'
import { useDispatch  } from 'react-redux';
import { popup } from '../redux/loginSlice';

export default function Popup(props) {
  const dispatch = useDispatch();
  return (props.trigger) ? (
    <div className='w-10/12 p-6 fixed flex justify-center flex-col bg-green-600 rounded-md ml-20'>
        <div className='absolute right-2 top-1'>
            <button onClick={()=>dispatch(popup())} className="text-white">Close</button>
        </div>
            {props.children}
    </div>
  ) : "";
}
