import {  LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux";


const Header = ()=>
{
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  const cartItems=useSelector((store) =>store.cart.items);

 const [btn_name,setBtn]=useState("log in");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                  <li className="px-4">Online status:{onlineStatus ? "✅" : "🔴" }</li>
                  <li className="px-4"> <Link to="/">Home</Link></li>
                  <li className="px-4"><Link to="/about">about us</Link></li>
                  <li className="px-4"><Link to="/contact">contact</Link> </li>
                  <li className="px-4 font-bold text-xl" ><Link to="/Cart">cart - ({cartItems.length})</Link></li>
                  <button className="login-btn px-4" onClick={()=>
                  {
                    
                      btn_name==="log in" ? setBtn("log out"):  setBtn("log in");
                     
                  }}>{btn_name}</button>
                 <li className="font-bold">{loggedInUser}</li>
                </ul>
        </div>
    </div>
  )
}
export default  Header;