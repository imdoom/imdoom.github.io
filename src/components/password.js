import { useState } from "react";
import { Link } from "react-router-dom";

const rulesMap = {
  ".{6,}": "The password should be minimum 6 characters",
  "^(?=.*[0-9]).{6,}$": "The password should have atleast one number.",
  "^(?=.*[0-9])(?=.*[A-Z]).{6,}$":
    "The password should have atleast a capital letter",
  "^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*)(]).{6,}$":
    "The password should have atleast one special character",
  "(?=.*[A-Z0-9a-z])": "The password digits should add upto 13",
  "(?=.*[A-Z0-9a-zpP])": "The password digits should have either p or P in it",
  "(?=.*[A-Z0-9a-z].*${gg})": "The password digits should a month of the year",
};

const Password = () => {
  const rules = Object.keys(rulesMap);
  const [processed, setProcessed] = useState([]);
  const [initPass, setInitPass] = useState(true);
  const [rule, setRule] = useState(0);

  function changePass(password) {
    setInitPass(false);
    if (rule < rules.length) {
      const regex = new RegExp(rules[rule]);
      if (rulesMap[rules[rule]] === "The password digits should add upto 13") {
        let chars = [...password],
          sum = 0;
        chars.forEach((char) => {
          if (!isNaN(Number(char))) {
            sum += Number(char);
          }
        });
        if (sum === 13) {
          setProcessed([...processed, rules[rule]]);
          setRule(rule + 1);
        }
      } else {
        if (regex.test(password)) {
          setProcessed([...processed, rules[rule]]);
          setRule(rule + 1);
        }
      }
    }
  }

  function reset() {
    setProcessed([]);
    setInitPass(true);
    setRule(0);
    document.getElementById("password").value = "";
  }

  function getAlerts() {
    return (
      <div>
        {initPass || rule === rules.length ? null : (
          <div
            className="flex items-center m-auto p-4 mb-4 w-3/6 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
            key={rulesMap[rules[rule]]}
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
              <span className="font-medium">{rulesMap[rules[rule]]}</span>
            </div>
          </div>
        )}
        {processed.map((r) => (
          <div
            class="flex items-center m-auto p-4 mb-4 w-3/6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
            key={rulesMap[r]}
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
              <span className="font-medium">{rulesMap[r]}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="absolute top-4 right-4">
          <Link to="/">
            <button className="text-sm bg-gray-200 font-semibold border-2 border-green-500 px-3 py-1 rounded">
              Back
            </button>
          </Link>
        </div>

        <p className="text-4xl pt-6">* The password game</p>
        <div className="mb-6 mt-10 flex-1">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Please choose a password
            </label>
            <input
              type="text"
              id="password"
              onChange={(ev) => changePass(ev.target.value)}
              className="border-solid border-2 border-indigo-600"
            />
          </div>
          <div class="mt-4">
            <button
              type="button"
              class="text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => reset()}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
      {getAlerts()}
    </>
  );
};

export default Password;
