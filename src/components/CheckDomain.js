"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CheckDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isAvailable, setIsAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setHasChecked(false);
      const res = await fetch(
        `https://interview-task-green.vercel.app/task/domains/check/${data.domain}.expressitbd.com`
      );

      if (res.ok) {
        const result = await res.json();
        setLoading(false);
        setIsAvailable(result?.data?.taken);
        setHasChecked(true);
        console.log(result.data.taken);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="domain">Domain Name: </label>
          <br />
          <input
            type="text"
            className="border border-gray-300 w-full p-3"
            {...register("domain", { required: true })}
          />
          {errors.domain && (
            <span className="text-red-500">Domain name is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          {loading ? "Checking..." : "Check Domain"}
        </button>
      </form>

      {hasChecked &&
        (isAvailable ? (
          <p className="text-red-500"> Domain is not available. </p>
        ) : (
          <p className="text-green-500">
            {" "}
            Domain is available.{" "}
            <span className="text-blue-600 underline cursor-pointer">
              <Link href="/create-store">Create your store</Link>
            </span>
          </p>
        ))}
    </>
  );
};

export default CheckDomain;
