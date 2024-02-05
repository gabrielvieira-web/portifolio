import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { menuActiveState } from "state/atom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const hideMenu = useSetRecoilState(menuActiveState)

  useEffect(() => {
    hideMenu(false);
    
    if(pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 502);
    }
  }, [pathname, hideMenu]);

  return null;
}