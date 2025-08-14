import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import InsightsWrapper from "./InsightsWrapper";

vi.mock("../Insight/Insight", () => ({
  default: ({ title }: { title: string }) => <div>{title}</div>,
}));

vi.mock("../Heading/Heading", () => ({
  default: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

describe("InsightsWrapper", () => {
  const mockInsights = [
    { title: "Insight One", body: "Body one", impact: "High", onTrack: true },
    { title: "Insight Two", body: "Body two", impact: "Low", onTrack: false },
  ];

  it("renders the header", () => {
    render(<InsightsWrapper insights={mockInsights} />);
    expect(screen.getByText("Insights")).toBeInTheDocument();
  });

  it("renders all insights", () => {
    render(<InsightsWrapper insights={mockInsights} />);
    expect(screen.getByText("Insight One")).toBeInTheDocument();
    expect(screen.getByText("Insight Two")).toBeInTheDocument();
  });
});
