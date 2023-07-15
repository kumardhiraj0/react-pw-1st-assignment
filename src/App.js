import "./App.css";
import Person from "./components/problem1/Person";
import Button from "./components/problem2/Button";
import Header from "./components/problem3/Header";
import List from "./components/problem4/List";
function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const listItems = ['Item 1', 'Item 2', 'Item 3' ,"item 4"];
  return (
    <div className="App">
          {/* problem1 */}
          <Person name={"Mohit"} age={30}/>

          {/* problem2 */}
          <Button text="Click Me" onClick={handleClick} />

          {/* problem3 */}
          <Header title = "Learning React From Pw Skills"/>

          {/* problem4 */}
          <List items={listItems}/>
    </div>
  );
}

export default App;
