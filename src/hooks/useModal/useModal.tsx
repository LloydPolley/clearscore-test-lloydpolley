import { useState, useEffect } from "react";
import { URL_MODAL, closeModalEvent, openModalEvent } from "../../constants";
import {
  type FetchedData,
  type ModalData,
  type CustomModalEvent,
} from "../../types/modal";

type UseModalReturn = {
  isOpen: boolean;
  data: FetchedData | null;
  loading: boolean;
  error: string | null;
  modalData: ModalData | null;
  closeModal: () => void;
};

export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<FetchedData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(URL_MODAL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: FetchedData = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = (): void => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent(closeModalEvent));
  };

  useEffect(() => {
    const handleOpenModal = (event: CustomModalEvent) => {
      setIsOpen(true);
      setModalData(event.detail || null);
      fetchData();
    };

    const handleCloseModal = () => setIsOpen(false);

    window.addEventListener(openModalEvent, handleOpenModal);
    window.addEventListener(closeModalEvent, handleCloseModal);

    return () => {
      window.removeEventListener(openModalEvent, handleOpenModal);
      window.removeEventListener(closeModalEvent, handleCloseModal);
    };
  }, []);

  return {
    isOpen,
    data,
    loading,
    error,
    modalData,
    closeModal,
  };
};
