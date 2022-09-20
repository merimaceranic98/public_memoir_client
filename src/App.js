import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./features/header/header";
import { ROUTES } from "./routing/routes";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
