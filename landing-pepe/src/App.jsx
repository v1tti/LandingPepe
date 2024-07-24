import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { GlobalUserProvider } from "./context/use-gacha-records";

function App() {
  return (
    <>
      <GlobalUserProvider>
        <RouterProvider router={router} />
      </GlobalUserProvider>
    </>
  );
}

export default App;
