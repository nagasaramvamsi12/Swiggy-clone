import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
const ItemList = ({ item }) => {
 // console.log(item);
 const dispatch=useDispatch();
 const HandleOnClick=(item)=>
 {
    dispatch(addItem(item));
 }
  return (
    <div className="">
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200  border-b-2 text-left flex justify-between items-center"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs w-[450px]">{item.card.info.description}</p>
          </div>
          <div>
           <div className="absolute"> 
           <button className="p-2 mx-8  rounded-lg bg-black text-white shadow-lg" onClick={() => HandleOnClick(item)}>Add</button>
           </div>
           
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-[100px] rounded-lg shadow-lg border-black-50"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
