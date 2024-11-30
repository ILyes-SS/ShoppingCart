import {describe, it, expect} from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import "@testing-library/jest-dom"; // Import matchers

import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Shop', () => {
    it('displays products',async () => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
      expect(await screen.findByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument()
    });
    it('displays quantity = 1 when item is added ',async () => {
        const user = userEvent.setup()
        render(
          <MemoryRouter initialEntries={["/shop"]}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="shop" element={<Shop />} />
              </Route>
            </Routes>
          </MemoryRouter>
        );
        const addToCartBtns = await screen.findAllByText("Add to Cart",{exact:true})
        for (const btn of addToCartBtns) {
            await user.click(btn)

        }
        const inputs = await screen.findAllByDisplayValue("1")
        for (const input of inputs) {
            expect(input.value).toMatch("1")
        }  
      });
    //   it('displays quantity = 1 when item is added ',async () => {
    //     const user = userEvent.setup()
    //     render(
    //       <MemoryRouter initialEntries={["/shop"]}>
    //         <Routes>
    //           <Route path="/" element={<App />}>
    //             <Route path="shop" element={<Shop />} />
    //           </Route>
    //         </Routes>
    //       </MemoryRouter>
    //     );
    //     const addToCartBtns = await screen.findAllByText("Add to Cart",{exact:true})
    //     for (const btn of addToCartBtns) {
    //         await user.click(btn)

    //     }
    //     const cartLink = screen.getByRole("link", { name: /🛒\s*2/i });
    //     expect(cartLink).toBeInTheDocument()
        
    //   });
  });