import style from "./style/App.module.scss";
import Cv from "./components/CV";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className={style.container}>
      <Form
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setBio={setBio}
      />
      <Cv firstName={firstName} lastName={lastName} email={email} bio={bio} />
    </div>
  );
}

export default App;
