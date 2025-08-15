import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Heading from "./Heading";

vi.mock("./Heading.module.scss", () => ({
  default: { headline: "headline" },
}));

describe("Heading", () => {
  it("renders the title", () => {
    render(<Heading title="Test Title" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Title"
    );
  });
});
