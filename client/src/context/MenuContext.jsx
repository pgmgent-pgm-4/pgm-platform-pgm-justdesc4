import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle("no-scroll");
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
