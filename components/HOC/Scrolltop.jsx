import { useEffect } from "react";


const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    // window.scrollTo({
    win.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;