import { useSelector,useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { ClearCart } from "../utils/CartSlice";
const Cart=()=>
{

    const cartItems=useSelector((store) =>store.cart.items);
    const dispatch=useDispatch();
    const handleClick=()=>
    {
        dispatch(ClearCart())
    }
    return (<div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold">Cart</h1>
         <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClick}>Clear Cart</button>
         <div className="w-6/12 m-auto">
            {cartItems.length===0 ? <h1 className="font-bold">Your cart is empty
You can go to home page to view more restaurants</h1> :  <ItemList item={cartItems} />} 
           
         </div>
    </div>)
}
export default Cart;