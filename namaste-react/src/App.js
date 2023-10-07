
//creating nested div using react 
import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cart from "./components/Cart";
const AppLayout =()=>
{

  const [UserName,SetUserName]=useState();
  useEffect(()=>
  {
    //made api call and fetch data from the server;
   const data={
      name:"vamsi",
  }
  SetUserName(data.name);
  },[])
  return (
    <Provider store={Appstore}>
      <UserContext.Provider value={{loggedInUser:UserName,SetUserName}}>
    <div className="app">
        <Header/>
        <Outlet/>
   </div>
   </UserContext.Provider>
    </Provider>
    
   )
}
const Body=lazy(()=>import( "./components/ Body "))
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
          path:"/",
          element:<Suspense fallback={<h1>Loading....</h1>}><Body/></Suspense>
      },
      {
        path:"/about",
        element:<About/>   
     },
     {
       path:"/contact",
        element:<Contact/>
     }
     ,
     {
      path:"/restaurants/:resId",
      element:<RestuarantMenu/>
     }
     ,
     {
      path:"/Cart",
      element:<Cart/>
     }
    ],
    errorElement:<Error/>
  },
  
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

