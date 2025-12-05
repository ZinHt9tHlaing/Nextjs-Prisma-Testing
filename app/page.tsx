import { readData } from "@/server/actions";
import React from "react";

const HomePage = async () => {
  const data = await readData();
  console.log("data", data);

  return <div>HomePage</div>;
};

export default HomePage;
