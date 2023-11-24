import { createContext, useContext, useEffect, useState } from "react";

export const DisplayMenuContext = createContext();

export const DisplayMenuProvider = ({ children }) => {
  const [ menuActive, useMenuActive ] = useState(false);
  const [ redirectByButton, useRedirectByButton ] = useState(false);
  
  return (
    <DisplayMenuContext.Provider value={{ menuActive, useMenuActive, redirectByButton, useRedirectByButton }}>
      {children}
    </DisplayMenuContext.Provider>
  )
}

export const useDisplayMenu = () => {
  const { menuActive, useMenuActive, redirectByButton, useRedirectByButton } = useContext(DisplayMenuContext);

  const displayMenu = () => {
    if(redirectByButton) {
      useMenuActive(false);
      return;
    }

    useMenuActive(!menuActive)
  }

  const hideMenu = () => {
    if(menuActive) {
      useMenuActive(false);
    } else {
      useMenuActive(menuActive)
    }
  }

  const activateRedirectionStateByButton = () => {
    useRedirectByButton(!redirectByButton);
    displayMenu();
    useRedirectByButton(false)
  }

  return {
    menuActive,
    useMenuActive,
    displayMenu,
    hideMenu,
    redirectByButton,
    activateRedirectionStateByButton
  }
}