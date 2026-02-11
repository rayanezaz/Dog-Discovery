export default function DogCard(props) {
  return (
    <div>
      <h2>{props.breed}</h2>
      <p>{props.description}</p>
    </div>
  );
}
