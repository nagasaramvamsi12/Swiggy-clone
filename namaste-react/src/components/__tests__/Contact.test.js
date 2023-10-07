import {render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact us Page testcases",()=>
{

    test("should load  contact us component",()=>
    {
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    test("should load button inside contact us component",()=>
    {
        render(<Contact/>);
        const button=screen.getByText("submit");
        expect(button).toBeInTheDocument();
    });
    test("should load input inside contact us component",()=>
    {
        render(<Contact/>)
        const inputName=screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    test("should load  2 input inside contact us component",()=>
    {
        render(<Contact/>)
        const inputNames=screen.getAllByRole("textbox");
       expect(inputNames.length).toBe(2);
    });
});
//we can write it instaed test keyword for above testing


