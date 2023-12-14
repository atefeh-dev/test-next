// pages/index.js
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  const handleUpdateMessage = () => {
    dispatch(updateMessage("Hello Redux Thunk!"));
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleUpdateMessage}>Update Message</button>
    </div>
  );
};

export default Home;
