// // AddTodo.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "@/redux/actions";

// const AddTodo = () => {
//   const [newTodo, setNewTodo] = useState("");
//   const [loading, setLoading] = useState(false); // New state to track loading
//   const dispatch = useDispatch();

//   const handleAddTodo = async () => {
//     if (newTodo.trim() !== "") {
//       setLoading(true); // Set loading to true before the API call or dispatching
//       // Simulate API call with a timeout
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       dispatch(addItem({ id: Date.now(), text: newTodo, done: false }));
//       setNewTodo("");
//       setLoading(false); // Set loading to false after the API call or dispatching
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo} disabled={loading}>
//         {loading ? "Adding Todo..." : "Add Todo"}
//       </button>
//     </div>
//   );
// };

// export default AddTodo;
// AddTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/actions";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      setLoading(true);

      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(addItem({ id: Date.now(), text: newTodo, done: false }));
      setNewTodo("");
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} disabled={loading}>
        {loading ? "Adding Todo..." : "Add Todo"}
      </button>
    </div>
  );
};

export default AddTodo;
