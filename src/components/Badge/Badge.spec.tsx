import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders children correctly", () => {
    render(<Badge variant="on">Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Badge variant="impact">Impact</Badge>);
    const badgeElement = screen.getByText("Impact");
    expect(badgeElement.className).toMatch(/badge--impact/);
  });
});
