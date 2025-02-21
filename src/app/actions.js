"use server";

export async function createStore(formData) {
  try {
    const res = await fetch(
      `https://interview-task-green.vercel.app/task/stores/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message);
    }
    const data = await res.json();
    return { success: true, message: "Store created successfully!", data };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
