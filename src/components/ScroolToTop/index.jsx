import { useDisplayMenu } from "context/displayMenu";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { hideMenu } = useDisplayMenu();

  useEffect(() => {
    hideMenu();
    
    if(pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 501);
    }
  }, [pathname]);

  return null;
}