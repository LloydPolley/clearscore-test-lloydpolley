import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useInsights from "./useInsights";
import { generateInsights } from "../utils/generateInsights";

vi.mock("../utils/generateInsights");

describe("useInsights", () => {
  const mockData = {
    accounts: [],
    personal: { electoralRoll: [], publicInfo: { courtAndInsolvencies: [] } },
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches data and sets insights", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      json: async () => mockData,
    } as any);

    (generateInsights as any).mockReturnValue([
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

  it("sets error when fetch fails", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("fail"));

    const { result } = renderHook(() => useInsights("/test-url"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.insights).toEqual([]);
    expect(result.current.error).toBeInstanceOf(Error);

    consoleSpy.mockRestore();
  });
});
