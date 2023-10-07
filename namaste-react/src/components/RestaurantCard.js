import { json } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const { cloudinaryImageId, cuisines,  name, avgRating } = resData?.info;
   const {deliveryTime}= resData?.info?.sla;

  const displayedCuisines = cuisines.slice(0, 3);

  return (
    <div data-tesid="restuarants" className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-l">{name}</h3>
     <h4>{displayedCuisines.join(",")}</h4>
      <p className="p-stars">{ avgRating } STARS</p>
      <p className="delivery-time">Time to deliver: {deliveryTime} minutes</p>
    </div>
  );
};
export const withPrometedLabel=(RestaurantCard)=>
{
  return (props)=>
  {
    return (<div>
   <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
   <RestaurantCard  {...props} />
     </div>)
  }
}

export default RestaurantCard;
