import DogCard from "./components/DogCard";

export default function Home() {
  return (
    <div>
      <h1>Dog Discovery 🐶</h1>
      <p>Find your new best friend.</p>

      <DogCard breed="Golden Retriever" description="Friendly, loyal, great with families." />
      <DogCard breed="German Shepherd" description="Smart, protective, very loyal." />
      <DogCard breed="Labrador" description="Loves people and playing fetch." />
    </div>
  );
}
