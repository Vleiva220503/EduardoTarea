import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Themeroutes from "./routes/Router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Página recargada automáticamente al cambiar de ruta");
  }, [pathname]);

  return null;
};

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <div className="dark">
      <ScrollToTop />
      {routing}
    </div>
  );
};

export default App;
