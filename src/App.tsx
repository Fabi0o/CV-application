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
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        setBio={setBio}
      />
      <Cv firstName={firstName} lastName={lastName} email={email} bio={bio} />
    </div>
  );
}

export default App;
