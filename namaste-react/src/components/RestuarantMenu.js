import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);
  const [showIndex,setshowIndex]=useState();
  if (resInfo == null) return <Shimmer />;

  const { cuisines, name, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
 
  
  const categeories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 
  return (
    <div   className="text-center">
      <h1 className="font-bold my-6  text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</p>
      {
       categeories.map((categeory,index)=>
       {
          return  <RestuarantCategory  key={categeory.card.card.title} data={categeory?.card?.card} showItems={ index=== showIndex ? true : false}  setshowIndex={()=>setshowIndex(index)}/>
          
       })
     }
     
    </div>
  );
}

export default RestuarantMenu;
