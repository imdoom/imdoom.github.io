import { React, useState, useEffect } from "react";

const rules = {
  ".{6,}": "The password should be minimum 6 characters",
  "^(?=.*[0-9]).{6,}$": "The password should have atleast one number.",
  "^(?=.*[0-9])(?=.*[A-Z]).{6,}$":
    "The password should have atleast a capital letter",
  "^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*)(]).{6,}$":
    "The password should have atleast one special character",
  "(?=.*[A-Z0-9a-z])": "The password digits should add upto 13",
};

const Password = () => {
  const [password, setPassword] = useState("");
  const rulesArr = Object.keys(rules);
  const [currRule, setCurrRule] = useState(0);

  useEffect(() => {
    if (!password) {
      setProcessed([]);
      setCurrRule(0);
    } else {
    }

    if (currRule < rulesArr.length) {
      rulesArr.find((rule) => {
        if (rule in processed) {
          return false;
        } else {
          const regex = new RegExp(rule);
          if (rules[rule] === "The password digits should add upto 13") {
            let chars = [...password],
              sum = 0;
            chars.forEach((char) => {
              console.log(Number(char));
              if (Number(char)) {
                sum += Number(char);
              }
            });
            if (sum === 13) {
              return true;
            }
          } else {
            if (regex.test(password)) {
              return true;
            }
          }
          return false;
        }
      });
    }
  }, [password]);

  function getAlerts() {
    return (
      <div>
        {currRule ? null : (
          <div
            className="flex items-center m-auto p-4 mb-4 w-3/6 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
            key={rules[currRule]}
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">{rules[rule]}</span>
            </div>
          </div>
        )}
        {processed.map((rule) => (
          <div
            class="flex items-center m-auto p-4 mb-4 w-3/6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
            key={rules[rule]}
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span className="font-medium">{rules[rule]}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <p className="text-4xl pt-6">* The password game</p>
      <div className="mb-6 mt-10">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Please choose a password
        </label>
        <input
          type="text"
          id="large-input"
          onChange={(ev) => setPassword(ev.target.value)}
          className="border-solid border-2 border-indigo-600"
        />
      </div>
      {getAlerts()}
    </>
  );
};

export default Password;
