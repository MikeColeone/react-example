import React from "react";
import CanvasTable, { RowData } from "./components/CanvasTable";

const generateDemoData = (count: number): RowData[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 18 + (i % 50),
  }));
};

const App: React.FC = () => {
  const data = generateDemoData(10000);

  return (
    <div style={{ padding: 20 }}>
      <h2>Canvas Table with Virtual Scroll</h2>
      <CanvasTable data={data} visibleHeight={400} />
    </div>
  );
};

export default App;
