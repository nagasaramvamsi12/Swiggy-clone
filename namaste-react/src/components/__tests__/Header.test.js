import { screen , render, fireEvent} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Appstore from "../../utils/Appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should render header component with a  login button",()=>
{
    render(
        <BrowserRouter>
         <Provider store={Appstore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const LoginButton=screen.getByRole("button",{name:"log in"});
   expect(LoginButton).toBeInTheDocument();
});
it("should render header component with a Cart Items 0",()=>
{
    render(
        <BrowserRouter>
         <Provider store={Appstore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const Cart=screen.getByText("cart - (0)");
   
  expect(Cart).toBeInTheDocument();
});
it("should render header component with a Cart Item",()=>
{
    render(
        <BrowserRouter>
         <Provider store={Appstore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const Cart=screen.getByText(/cart/);
   
  expect(Cart).toBeInTheDocument();
});
it("should Change login button to logout",()=>
{
    render(
        <BrowserRouter>
         <Provider store={Appstore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const LoginButton=screen.getByRole("button",{name:"log in"});
    fireEvent.click(LoginButton);
    const LogOutButton=screen.getByRole("button",{name:"log out"});
   
  expect(LogOutButton).toBeInTheDocument();
});