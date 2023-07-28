
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SliderBar } from ".";
import React from "react";
import '@testing-library/jest-dom/extend-expect';


describe('slider atom',()=>{
      it("shold renders a Slider element with correct props", () => {
        const props = {
          value: 50,
          min: 0,
          max: 100,
        };
        render(<SliderBar {...props} />);
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("value");
        expect(slider).toHaveAttribute("min");
        expect(slider).toHaveAttribute("max");
      });
      
      it("should disables the Slider", () => {
        render(<SliderBar disabled />);
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute('disabled');

      });
})