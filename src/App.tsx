import { useState } from "react";
import { ContextCount } from "./utils/context-count";
import Dashboard from "./components/Dashboard";

function App() {
  const [contextCount, setContextCount] = useState<number>(0);

  return (
    <>
      <ContextCount.Provider value={{ contextCount, setContextCount }}>
        <Dashboard />
      </ContextCount.Provider>
    </>
  );
}

export default App;
