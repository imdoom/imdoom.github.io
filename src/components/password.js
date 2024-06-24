import React from "react";
const Password = () => {
  return (
    <>
      <p class="text-4xl pt-6">* The password game</p>
      <div class="mb-6 mt-10">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Please choose a password
        </label>
        <input type="text" id="large-input" />
      </div>
    </>
  );
};
export default Password;
