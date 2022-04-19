import { createContext, useState, useEffect, useContext } from "react";

export const ScrollContext = createContext([]);

export const ScrollContextProvider = (props) => {
  const [lastYposition, setLastYposition] = useState(0);
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYposition;

      setLastYposition(yPos);
      setShowAction(isScrollingUp);
    };

    window.addEventListener("scroll", handleScroll, { massive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { massive: true });
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ showAction, lastYposition }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export const useScrollAction = () => {
  const { showAction, lastYposition } = useContext(ScrollContext);

  return { showAction, lastYposition };
};
