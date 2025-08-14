import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./Card";

describe("Card", () => {
  it("renders children correctly", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies the custom class name", () => {
    render(<Card className="custom-class">Content</Card>);
    const cardElement = screen.getByText("Content");
    expect(cardElement).toHaveClass("custom-class");
  });
});
