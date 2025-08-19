import { useState } from "react";
import Dashboard from "./routes/Dashboard";
import { ContextCount } from "./utils/context-count";

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
