type Props = {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
};

const Cv: React.FC<Props> = ({ firstName, lastName, email, bio }) => {
  return (
    <div>
      <h1>CV</h1>
      <h2>Name: {`${firstName} ${lastName}`}</h2>
      <h3>Email: {email}</h3>
      <h3>Bio:</h3>
      <p>{bio}</p>
    </div>
  );
};

export default Cv;
