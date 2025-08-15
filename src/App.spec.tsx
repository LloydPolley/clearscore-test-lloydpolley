import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";

import App from "./App";
import useInsights from "./hooks/useInsights/useInsights";

vi.mock("./hooks/useInsights/useInsights", () => {
  return { default: vi.fn() };
});

vi.mock("./components/InsightsWrapper/InsightsWrapper", () => {
  return {
    default: ({}: { insights: any }) => <div data-testid="insights-wrapper" />,
  };
});

vi.mock("./components/Modal/Modal", () => {
  return { default: () => <div data-testid="modal">Modal</div> };
});

const mockUseInsights = vi.mocked(useInsights);

beforeEach(() => {
  vi.clearAllMocks();
});

describe("App", () => {
  it("renders InsightsWrapper when insights exist", () => {
    mockUseInsights.mockReturnValue({
      insights: [
        { title: "Test", body: "Body", impact: "Medium", onTrack: true },
      ],
      loading: false,
      error: undefined,
    });

    render(<App />);

    expect(screen.getByTestId("insights-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("renders loading message when loading", () => {
    mockUseInsights.mockReturnValue({
      insights: [],
      loading: true,
      error: undefined,
    });

    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
