import React from "react";
import MyForm from "./src/components/MyForm";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black text-center">Form Page</h1>
      <MyForm/>
    </div>
   </div>
  );
}
