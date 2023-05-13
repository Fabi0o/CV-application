import style from "../style/Form.module.scss";

type Props = {
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setBio: React.Dispatch<React.SetStateAction<string>>;
};

const Form: React.FC<Props> = ({
  setFirstName,
  setLastName,
  setEmail,
  setBio,
}) => {
  return (
    <form className={style.container}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          id=""
          cols={30}
          rows={10}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
