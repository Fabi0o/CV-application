import style from "./style/App.module.scss";
import Cv from "./components/CV";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={style.container}>
      <Form
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
      />
      <Cv firstName={firstName} lastName={lastName} email={email} />
    </div>
  );
}

export default App;
