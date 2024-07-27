import React from "react";
import MyForm from "./src/components/MyForm";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-4x1 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Form Page</h1>
      <MyForm/>
    </div>
   </div>
  );
}
