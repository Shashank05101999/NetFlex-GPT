import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import AppStore from "./Redux/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Body />;
    </Provider>
  );
}

export default App;
