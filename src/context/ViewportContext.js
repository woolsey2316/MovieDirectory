import React from 'react'

const ViewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

/* Improve the performance of our useViewport Hook by sharing a single-window resize event 
   listener amongst all the components that use the Hook. */
const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, (Hooks are composable) */
  const { width, height } = React.useContext(ViewportContext);
  return { width, height };
}

export { ViewportProvider, ViewportContext, useViewport }