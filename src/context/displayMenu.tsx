import { createContext, useContext, useState } from "react";

interface MyContextProps {
  menuActive: boolean
  useMenuActive: React.Dispatch<React.SetStateAction<boolean>>
  redirectByButton: boolean
  useRedirectByButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const DisplayMenuContext = createContext<MyContextProps>({} as MyContextProps);

export const DisplayMenuProvider = ({children}: {children: React.ReactNode}) => {
  const [ menuActive, useMenuActive ] = useState(false);
  const [ redirectByButton, useRedirectByButton ] = useState(false);
  
  return (
    <DisplayMenuContext.Provider value={{
      menuActive, useMenuActive, redirectByButton, useRedirectByButton
    }}>
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