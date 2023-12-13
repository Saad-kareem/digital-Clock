import { useState } from "react";
import List from "./components/List";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [addItem, setAddItem] = useState([]);
  
  const InputEvent = (event) => {
    const List = event.target.value;
    setInputList(List);
  };
  const AddItems = () => {
    setAddItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("clicked");
    setAddItem((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={InputEvent}
            value={inputList}
          />
          <button onClick={AddItems}> + </button>
          <ol>
            {addItem.map((itemval, index) => (
              <List
                key={index}
                id={index}
                ItemValue={itemval}
                onSelect={deleteItem}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
