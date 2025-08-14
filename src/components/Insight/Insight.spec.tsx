import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Insight from "./Insight";
import { onTrackText, offTrackText } from "../../constants";

describe("Insight", () => {
  it("renders onTrack variant", () => {
    render(
      <Insight
        title="Test Title"
        body="Test Body"
        onTrack={true}
        impact="MEDIUM IMPACT"
      />
    );

    expect(screen.getByText(onTrackText)).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
    expect(screen.getByText("MEDIUM IMPACT")).toBeInTheDocument();
  });

  it("renders offTrack variant", () => {
    render(
      <Insight
        title="Another Title"
        body="Another Body"
        onTrack={false}
        impact="HIGH IMPACT"
      />
    );

    expect(screen.getByText(offTrackText)).toBeInTheDocument();
    expect(screen.getByText("Another Title")).toBeInTheDocument();
    expect(screen.getByText("Another Body")).toBeInTheDocument();
    expect(screen.getByText("HIGH IMPACT")).toBeInTheDocument();
  });
});
