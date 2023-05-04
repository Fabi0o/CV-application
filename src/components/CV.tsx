type Props = {
  firstName: string;
  lastName: string;
};
const CV: React.FC<Props> = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>CV</h1>
      <h2>Name: {`${firstName} ${lastName}`}</h2>
    </div>
  );
};

export default CV;
