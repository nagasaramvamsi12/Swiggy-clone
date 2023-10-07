import { render ,screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard, { withPrometedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
it("should render Restuarant Component with props data",()=>
{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name=screen.getByText("Navya Grand");
    expect(name).toBeInTheDocument();

});
it("should render Restuarant Component with promoted label",()=>
{
  
    const RestuarantCardPromoted=withPrometedLabel(RestaurantCard);
  render(<RestuarantCardPromoted resData={MOCK_DATA}/>);
     const promoted=screen.getByText("Promoted");
     expect(promoted).toBeInTheDocument();

});