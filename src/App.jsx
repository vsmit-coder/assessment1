import React from "react";
import ChecklistProvider from "./components/Check";
import Checklist from "./components/Checklist";

const App = () => (
  <ChecklistProvider>
    <div>
      <Checklist />
    </div>
  </ChecklistProvider>
);

export default App;
