import { IExercise } from "@/interfaces/IExercise";

const API_BASE_URL = "https://api.abcz.workers.dev/api";

export async function getExercises(): Promise<IExercise[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/fitlog`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch exercises: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetching exercises failed:", error);
    throw new Error("Fetching exercises failed");
  }
}

export async function getExerciseById(id: string): Promise<IExercise | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/fitlog/${id}`, {
      cache: "no-store",
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch exercise: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetching exercise failed:", error);
    throw new Error("Fetching exercise failed");
  }
}
