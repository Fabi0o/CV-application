import style from "./style/App.module.scss";
import CV from "./components/CV";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className={style.container}>
      <Form
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
      />
      <CV firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default App;
