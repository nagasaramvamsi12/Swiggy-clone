import RestaurantCard,{withPrometedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import UserContext from "../utils/UserContext";

const Body = (props)=>
{
 
 const [ListofResturants,setListofResturants]=useState([]);
 const [filterResturant,setFilterRestuarant]=useState([]);
 const [searchText,setSearchText]=useState("");
 const RestuarantCardPromoted=withPrometedLabel(RestaurantCard);
 const {SetUserName,loggedInUser}=useContext(UserContext);
   useEffect(()=>{
    fetchData()
   },[]);
   const fetchData =async ()=>
   {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const restaurantsWithPromoted = restaurants.map(restaurant => ({
        ...restaurant,
        isPromoted: restaurant.info.id % 2 === 0
      }));
     
      setListofResturants(restaurantsWithPromoted);
      setFilterRestuarant(restaurantsWithPromoted);
   }
   
  
 
   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false)
   return (<Offline/>)
   if(ListofResturants.length === 0)
   return  <Shimmer/>
  
  return (
    <div className="body">
         <div className="flex items-center">
        <div className="search-btn m-4 p-4">
          <input type="text"  data-testid="input_box" className="border border-solid border-black rounded-lg" value={searchText} onChange={(e)=>
          {
            if(e.target.value.length===0)
            {
              setFilterRestuarant(ListofResturants) 
              setSearchText(e.target.value)
            }
            else
            setSearchText(e.target.value)

          }}/>
          <button className="px-4 py-2 bg-green-100 m-4  rounded-lg" onClick={()=>
          {
            const filterResturant=ListofResturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
           setFilterRestuarant(filterResturant);
          }
          }>search</button>
         
        </div>
        <div className="px-4 py-2 h-10 bg-gray-100 ">
        <button   onClick={()=>{
             const filterList= ListofResturants.filter(
              (res)=>res.info.avgRating>=4
          
            );
            setFilterRestuarant(filterList);
          }}>TOP RATED Resturants</button>
        </div>
        <label className="font-bold m-3">UserName :</label>
          <input type="text" className="border border-black" value={loggedInUser}  onChange={(e)=>{
               SetUserName(e.target.value)
          }}></input>
         </div>
         <div className=" flex flex-wrap  ">
          {
            filterResturant.map((restuarant)=>(
              
              <Link
              key={restuarant.info.id}
              to={"/restaurants/"+restuarant.info.id}
              className="restaurant-link"
              >
            
               {
               restuarant.isPromoted ? (
                <RestuarantCardPromoted resData={restuarant} />
              ) : (
                <RestaurantCard resData={restuarant} />
              )
 
              }
               
              
              </Link>
              
            ))
           
          }
         </div>
    </div>
  )
}
export default Body;