"use server";

export async function createStore(data) {
  //   console.log("data recieve in server action", data);
  try {
    const res = await fetch(
      `https://interview-task-green.vercel.app/task/stores/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message);
    }
    const responseData = await res.json();
    return {
      success: true,
      message: "Store created successfully!",
      data: responseData,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
