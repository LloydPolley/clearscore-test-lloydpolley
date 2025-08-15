import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useModal } from "./useModal";
import { URL_MODAL, openModalEvent, closeModalEvent } from "../../constants";
import type { FetchedData, ModalData } from "../../types/modal";

describe("useModal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("initial state", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.modalData).toBeNull();
  });

  it("opens modal and fetches data successfully", async () => {
    const mockData: FetchedData = {
      title: "Test Title",
      onTrackDescription: "On track",
      offTrackDescription: "Off track",
      details: [],
    };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    }) as any;

    const { result } = renderHook(() => useModal());

    act(() => {
      window.dispatchEvent(
        new CustomEvent(openModalEvent, {
          detail: { onTrack: true, isOnTrackText: "On Track" } as ModalData,
        })
      );
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
    });

    expect(globalThis.fetch).toHaveBeenCalledWith(URL_MODAL);
  });

  it("handles fetch error", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
    }) as any;

    const { result } = renderHook(() => useModal());

    act(() => {
      window.dispatchEvent(new CustomEvent(openModalEvent));
    });

    await waitFor(() => {
      expect(result.current.error).toBe("Failed to fetch data");
      expect(result.current.loading).toBe(false);
    });
  });

  it("closes modal via closeModal function", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("closes modal via closeModalEvent", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      window.dispatchEvent(new CustomEvent(closeModalEvent));
    });

    expect(result.current.isOpen).toBe(false);
  });
});
