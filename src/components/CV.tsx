type Props = {
  firstName: string;
  lastName: string;
  email: string;
};

const CV: React.FC<Props> = ({ firstName, lastName, email }) => {
  return (
    <div>
      <h1>CV</h1>
      <h2>Name: {`${firstName} ${lastName}`}</h2>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default CV;
