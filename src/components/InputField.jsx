import React from "react";

const InputField = () => {
  return (
    <div className="flex m-8">
      <input
        type="text"
        placeholder="Add New Task..."
        className="bg-neutral-800 py-2 px-4 text-neutral-400 outline-none border-b-2 w-3/5 placeholder:text-neutral-500"
      />
      <button className="bg-neutral-900 w-14 text-white">Add</button>
    </div>
  );
};

export default InputField;
