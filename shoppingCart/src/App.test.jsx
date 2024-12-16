import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import ShopCard from "./components/shop/ShopCard";
import useProducts from "./components/useProducts";
import { MemoryRouter, Outlet } from "react-router-dom";

// Mock useOutletContext
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: () => [
    [
      { id: 1, title: "Product 1", price: 10, quantity: 1, image: "image1.jpg" },
    ],
    vi.fn(),
  ],
}));

// Mock fetch for useProducts
vi.mock("./components/useProducts", () => ({
  default: vi.fn().mockReturnValue({
    products: [
      { id: 1, title: "Product 1", price: 10, image: "image1.jpg" },
      { id: 2, title: "Product 2", price: 20, image: "image2.jpg" },
    ],
    loading: false,
    error: null,
  }),
}));

describe("Cart Component", () => {
  it("renders the cart with items", () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("10$")).toBeInTheDocument();
    expect(screen.getByText("Total Price: 10$"));
  });

  it("deletes an item from the cart", () => {
    const setCartMock = vi.fn();

    vi.mocked(useOutletContext).mockReturnValueOnce([
      [
        { id: 1, title: "Product 1", price: 10, quantity: 1, image: "image1.jpg" },
      ],
      setCartMock,
    ]);

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(setCartMock).toHaveBeenCalled();
  });

  it("updates total price when items are removed", () => {
    const setCartMock = vi.fn();

    vi.mocked(useOutletContext).mockReturnValueOnce([
      [
        { id: 1, title: "Product 1", price: 10, quantity: 1, image: "image1.jpg" },
        { id: 2, title: "Product 2", price: 20, quantity: 1, image: "image2.jpg" },
      ],
      setCartMock,
    ]);

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(setCartMock).toHaveBeenCalled();
  });
});

describe("Home Component", () => {
  it("renders the hero section and link to shop", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Welcome To Hanoti!")).toBeInTheDocument();
    expect(screen.getByText("shop")).toBeInTheDocument();
  });

  it("renders products in the swiper when loading is false", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("10$")).toBeInTheDocument();
    expect(screen.getByText("20$")).toBeInTheDocument();
  });

  it("handles loading state", () => {
    vi.mocked(useProducts).mockReturnValueOnce({ products: [], loading: true, error: null });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.queryByText("10$")).not.toBeInTheDocument();
    expect(screen.queryByText("20$")).not.toBeInTheDocument();
  });

  it("handles error state", () => {
    vi.mocked(useProducts).mockReturnValueOnce({ products: [], loading: false, error: "Error fetching products" });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Error fetching products")).toBeInTheDocument();
  });
});

describe("ShopCard Component", () => {
  it("renders the card with product details", () => {
    render(
      <ShopCard
        title="Product 1"
        image="image1.jpg"
        price={10}
        cart={[]}
        id={1}
        setCart={vi.fn()}
      />
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("10$")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

  it("increments and decrements quantity", () => {
    const setCartMock = vi.fn();
    render(
      <ShopCard
        title="Product 1"
        image="image1.jpg"
        price={10}
        cart={[{ id: 1, title: "Product 1", price: 10, quantity: 1 }]}
        id={1}
        setCart={setCartMock}
      />
    );

    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("-"));

    expect(setCartMock).toHaveBeenCalledTimes(2);
  });

  it("adds an item to the cart", () => {
    const setCartMock = vi.fn();
    render(
      <ShopCard
        title="Product 2"
        image="image2.jpg"
        price={20}
        cart={[]}
        id={2}
        setCart={setCartMock}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(setCartMock).toHaveBeenCalledWith([
      { id: 2, title: "Product 2", price: 20, quantity: 1 },
    ]);
  });

  it("disables button when out of stock", () => {
    render(
      <ShopCard
        title="Product 3"
        image="image3.jpg"
        price={15}
        cart={[]}
        id={3}
        setCart={vi.fn()}
        stock={0}
      />
    );

    expect(screen.getByRole("button", { name: /add to cart/i })).toBeDisabled();
  });
});
