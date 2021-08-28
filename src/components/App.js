import React, { createContext } from "react";
import { useRender } from "../hooks/render";
import Form from "./Form.js";
import TaskLogs from "./TaskLog";

export const DispatchContext = createContext();

const App = () => {
  const [taskLogs, dispatch] = useRender(
    "http://myjson.dit.upm.es/api/bins/avl"
  );
  return (
    <DispatchContext dispatch={dispatch}>
      <Form/>
      <TaskLogs logs={taskLogs}/>
    </DispatchContext>
  );
};

export default App;
