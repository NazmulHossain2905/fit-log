import { IExercise } from "@/interfaces/IExercise";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getExercises(): Promise<IExercise[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch exercises: ${response.status}`);
  }

  return response.json();
}

export async function getExerciseById(id: string): Promise<IExercise | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch exercise: ${response.status}`);
  }

  return response.json();
}
