import { useState } from "react";

export function usePhoneModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openPhoneModal = () => setIsOpen(true);
  const closePhoneModal = () => setIsOpen(false);

  return {
    isOpen,
    openPhoneModal,
    closePhoneModal,
    setIsOpen
  };
}