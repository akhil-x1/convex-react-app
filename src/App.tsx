import { useQuery } from "convex/react";
import "./App.css";

import { api } from "../convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get) || [];
  return (
    <div className="App">
      {tasks.map(({ _id, text }) => {
        return <div key={_id}>{text}</div>;
      })}
    </div>
  );
}

export default App;
