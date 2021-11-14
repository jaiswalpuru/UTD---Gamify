import { useState } from "react";

const ValidateNetID = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          let re = new RegExp("^[a-zA-Z]{3}[0-9]{6}$");
          if (re.test(input)) {
            console.log("Correct Net ID");
          } else {
            e.preventDefault();
            console.log("Incorrect Net ID");
          }
        }}
      >
        <label class="my-2">
          Enter NetID:
          <input
            type="text"
            name="name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);

              //console.log(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>{" "}
    </>
  );
};

export default ValidateNetID;
