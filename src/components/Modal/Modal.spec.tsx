import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect, type Mock } from "vitest";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal/useModal";

vi.mock("../../hooks/useModal/useModal", () => ({
  useModal: vi.fn(),
}));

const mockUseModal = useModal as Mock;

describe("Modal", () => {
  it("does not render when closed", () => {
    mockUseModal.mockReturnValue({ isOpen: false });
    const { container } = render(<Modal />);
    expect(container.firstChild).toBeNull();
  });

  it("renders loading state", () => {
    mockUseModal.mockReturnValue({
      isOpen: true,
      loading: true,
      error: null,
      modalData: null,
      data: null,
      closeModal: vi.fn(),
    });
    render(<Modal />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseModal.mockReturnValue({
      isOpen: true,
      loading: false,
      error: "Something went wrong",
      modalData: null,
      data: null,
      closeModal: vi.fn(),
    });
    render(<Modal />);
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
  });

  it("renders modal content", () => {
    const closeModal = vi.fn();
    mockUseModal.mockReturnValue({
      isOpen: true,
      loading: false,
      error: null,
      closeModal,
      data: {
        title: "Test Title",
        onTrackDescription: "On track description",
        offTrackDescription: "Off track description",
        details: [
          { title: "Detail 1", description: "Description 1" },
          { title: "Detail 2", description: "Description 2" },
        ],
      },
      modalData: { onTrack: true, isOnTrackText: "On Track" },
    });

    render(<Modal />);

    expect(screen.getByText("On Track")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("On track description")).toBeInTheDocument();
    expect(screen.getByText("Detail 1")).toBeInTheDocument();
  });

  it("closes when clicking outside", () => {
    const closeModal = vi.fn();
    mockUseModal.mockReturnValue({
      isOpen: true,
      loading: false,
      error: null,
      modalData: null,
      data: null,
      closeModal,
    });

    render(<Modal />);
    fireEvent.click(screen.getByTestId("modal"));
    expect(closeModal).toHaveBeenCalled();
  });
});
