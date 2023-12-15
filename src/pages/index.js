// pages/index.js
import React, { useEffect, useState } from "react";
import fs from "fs/promises";
import path from "path";
import Todo from "../components/todo";
import { useDispatch } from "react-redux";
import { setItems } from "@/redux/actions";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "src/initialData.json");

  try {
    const initialData = await fs.readFile(filePath, "utf-8");
    // Simulate API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      props: {
        initialData: JSON.parse(initialData),
      },
    };
  } catch (error) {
    console.error("Error reading initialData:", error);

    return {
      props: {
        initialData: [],
        error: "Failed to load initial data",
      },
    };
  }
}

export default function Home({ initialData, error }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Load initial data into the Redux store
        dispatch(setItems(initialData));
        setLoading(false);
      } catch (error) {
        console.error("Error loading initial data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, initialData]);

  return (
    <div>
      {loading ? (
        <p>Loading initial data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Todo />
      )}
    </div>
  );
}
