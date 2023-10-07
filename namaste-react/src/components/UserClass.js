import React from "react";
class UserClass extends React.Component
{
   
    constructor(props)
    {
       // console.log("constructor");
        super(props);
       this.state=     
       {
        userInfo:
        {
          name:"dummy name",
          location:"default",
          avatar_url:"https:dummy"
        }

       };
       
    }
    async componentDidMount()
    {
       // console.log("is mounted");
      
                const data=await fetch("https://api.github.com/users/akshaymarch7");
                const json=await data.json();
                this.setState(
                    {
                        userInfo:json
                    }
                )
            /**   this.timer=setInterval(()=>
                {
                    console.log("i am timer");
                },1000); */   
            
    }
    componentDidUpdate()
    {
       // console.log("update completed");
    }
   componentWillUnmount()
   {
    //clearInterval(this.timer);
    //console.log("did unmonut");
   }
        render()
        {
           
            //console.log("render");
           const {name,location,avatar_url}=this.state.userInfo
          
            return (<div className="w-60 bg-gray-100 p-5 m-5 border-black rounded-lg border border-solid">
                <img className="rounded-full w-20" src={avatar_url}/>
        <h2 className="font-bold">Name :{name}</h2>
        <h3 className="font-bold">Location: {location}</h3>
        <h4 className="font-bold"> Contact:@akshaymarch7</h4>
    </div>) 
        }
}
export default UserClass