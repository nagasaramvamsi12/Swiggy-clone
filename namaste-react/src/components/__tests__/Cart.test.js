import { render,screen } from "@testing-library/react"
import { act } from  "react-dom/test-utils"
import RestuarantMenu from "../RestuarantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import  Appstore from "../../utils/Appstore";
global.fetch=jest.fn(()=>
{
       Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA_NAME)
      })
});
it("should Load Restuarant Menu Component",async ()=>
{
     
      await act(async () => render( <Provider store={Appstore}>
            <RestuarantMenu/>
            </Provider>
       ));
     
});