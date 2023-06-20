import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "../../app/store";
import "bootstrap/dist/css/bootstrap.min.css";

const Redux = function () {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default Redux;
