import { useState } from "react";

const App = () => {
  let Time = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState(Time);

  function UpdateTime() {
    Time = new Date().toLocaleTimeString();
    setCtime(Time);
  }
  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};

export default App;
