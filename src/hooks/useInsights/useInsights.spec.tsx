import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useInsights from "./useInsights";
import { generateInsights } from "../../utils/generateInsights";

vi.mock("../../utils/generateInsights");
const mockGenerateInsights = vi.mocked(generateInsights);

describe("useInsights", () => {
  const mockData = {
    accounts: [],
    personal: { electoralRoll: [], publicInfo: { courtAndInsolvencies: [] } },
  };

  it("fetches data and sets insights", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    mockGenerateInsights.mockReturnValue([
      { title: "Test", body: "Body", impact: "Medium", onTrack: true },
    ]);

    const { result } = renderHook(() => useInsights("/test-url"));

    expect(result.current.loading).toBe(true);
    expect(result.current.insights).toEqual([]);
    expect(result.current.error).toBeUndefined();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.insights).toEqual([
      { title: "Test", body: "Body", impact: "Medium", onTrack: true },
    ]);
    expect(result.current.error).toBeUndefined();
  });

  it("handles fetch errors", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useInsights("/test-url"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.insights).toEqual([]);
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
