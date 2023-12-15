// pages/index.js
import React, { useEffect } from "react";
import fs from "fs/promises";
import path from "path";
import Todo from "../components/todo";
import { useDispatch } from "react-redux";
import { setItems } from "@/redux/actions";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "src/initialData.json");

  try {
    const initialData = JSON.parse(await fs.readFile(filePath, "utf-8"));

    // Return initialData as a prop
    return {
      props: {
        initialData,
      },
    };
  } catch (error) {
    console.error("Error reading initialData:", error);

    return {
      props: {
        initialData: [],
      },
    };
  }
}

export default function Home({ initialData }) {
  const dispatch = useDispatch();

  // This effect will run on the client side after the component is mounted
  useEffect(() => {
    // Load initial data into the Redux store
    dispatch(setItems(initialData));
  }, [dispatch, initialData]);

  return (
    <div>
      <Todo />
    </div>
  );
}
