import { useEffect, useRef, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { useGlobalContext } from "./context/context";

function App() {
  const { clearList, list, isLoading } = useGlobalContext();
  return (
    <section className="section-center">
      <Form />
      <List />
      {list.length > 0 && !isLoading && (
        <button onClick={clearList} className="clear-btn">
          Clear List
        </button>
      )}
    </section>
  );
}

export default App;