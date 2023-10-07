import { fireEvent, render ,screen} from "@testing-library/react";
import  {act} from "react-dom/test-utils";
import Body from "../ Body ";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>
{
    return Promise.resolve({
        json:()=>
        {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it("should rnder the Body Component with Search",async ()=>
{
    await act(async ()=> 
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
    );
    const searchbtn=screen.getByRole("button" ,{name:"search"});
    const serach_input=screen.getByTestId("input_box");
    fireEvent.change(serach_input,{target:{value:"pizza"}});
    fireEvent.click(searchbtn);
    const rest=screen.getAllByTestId("restuarants");
    expect(rest.length).toBe(2);
  
});
it("should render the Body Component and filter top rated restuarants",async ()=>
{
    await act(async ()=> 
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
    );
    const searchbtn=screen.getByRole("button" ,{name:"TOP RATED Resturants"});
    fireEvent.click(searchbtn);
    const rest=screen.getAllByTestId("restuarants");
   
    expect(rest.length).toBe(19);
  
});
