type Props = {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setBio: React.Dispatch<React.SetStateAction<string>>;
};

const Form: React.FC<Props> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  setBio,
}) => {
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="bio">Bio</label>
      <textarea
        name="bio"
        id=""
        cols={30}
        rows={10}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
    </form>
  );
};

export default Form;
