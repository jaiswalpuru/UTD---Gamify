import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const ValidateNetID = () => {
  const navigate = useNavigate();
  const goToLocation = () => navigate('/location', {state: {netID: input}});
  const [input, setInput] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          let re = new RegExp("^[a-zA-Z]{3}[0-9]{6}$");
          if (re.test(input)) {
            goToLocation();
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
