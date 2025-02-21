"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createStore } from "@/app/actions";

const StoreForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);

    const result = await createStore(data);

    if (result.success) {
      setLoading(false);
      router.push("/store");
    } else {
      setLoading(false);
      console.log(result.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            className="border border-gray-300 w-full p-3 my-3"
            {...register("name", {
              required: "Store name is required",
              minLength: {
                value: 3,
                message: "Store name must be at least 3 characters long",
              },
            })}
            placeholder="Store Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="text"
            className="border border-gray-300 w-full p-3 my-3"
            {...register("domain", {
              required: "Domain is required",
            })}
            placeholder="Domain name"
          />
          {errors.domain && (
            <p className="text-red-500">{errors.domain.message}</p>
          )}
        </div>

        <div>
          <select
            className="border border-gray-300 w-full p-3 my-1"
            {...register("country", { required: "Please select country" })}
          >
            <option value="">-- Choose an option --</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Singapore">Singapore</option>
            <option value="USA">USA</option>
          </select>

          {errors.country && (
            <p className="text-red-500 mt-1">{errors.country.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("category", { required: "Please select category" })}
            className="border border-gray-300 w-full p-3 my-3"
          >
            <option value="">-- Choose an option --</option>
            <option value="Fashion">Fashion</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Grocery">Grocery</option>
          </select>

          {errors.category && (
            <p className="text-red-500 mt-1">{errors.category.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("currency", { required: "Please select currency" })}
            className="border border-gray-300 w-full p-3 my-3"
          >
            <option value="">-- Choose an option --</option>
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          {errors.currency && (
            <p className="text-red-500 mt-1">{errors.currency.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 w-full p-3 my-3"
            {...register("email", {
              required: "Please enter your emails",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {loading ? "Submitting..." : "Create Store"}
        </button>
      </form>
    </div>
  );
};

export default StoreForm;
