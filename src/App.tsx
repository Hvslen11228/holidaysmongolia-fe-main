import { AuthContextProvider } from "context/AuthContext";
import React from "react";
import MyRouter from "routers/index";

function App() {
  return (
    <div className="text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 w-full">
      <AuthContextProvider>
        <MyRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
