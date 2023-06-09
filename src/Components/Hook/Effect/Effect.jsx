import axios from "axios";
import { useState, useEffect } from "react";

const Effect = function () {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDisplay(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(
    e => {
      localStorage.setItem("Text", text);
      console.log(text);
    },
    [text]
  );

  return (
    <>
      <textarea name="test" id="test" cols="30" rows="10" onChange={e => setText(e.target.value)} />
      {display.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};

export default Effect;
