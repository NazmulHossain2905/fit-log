import { IExercise } from "@/interfaces/IExercise";
import ExerciseCard from "./ExerciseCard";

function getExercise(): Promise<IExercise[]>;
function getExercise(id: string): Promise<IExercise>;

async function getExercise(id?: string): Promise<IExercise[] | IExercise> {
  try {
    const url = id
      ? `http://api.abcz.workers.dev/api/fitlog/${id}`
      : "http://api.abcz.workers.dev/api/fitlog";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch exercise: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetching exercise failed:", error);
    throw new Error("Fetching exercise failed");
  }
}

export default async function ExerciseGrid() {
  const exercises = await getExercise();

  return (
    <section id="workouts" className="mx-auto mt-16 max-w-7xl space-y-8 px-6">
      <div className="space-y-1">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          THE LIBRARY
        </h2>
        <p className="text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
}

export { getExercise };
