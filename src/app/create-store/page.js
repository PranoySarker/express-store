import StoreForm from "@/components/StoreForm";
import StoreFormText from "@/components/StoreFormText";

const CreateStorePage = () => {
  return (
    <div className="px-2">
      <h1 className="text-3xl font-bold text-gray-700 mt-10 pl-10">
        Create Store
      </h1>
      <p className="text-xl font-semibold text-gray-500 my-4 pl-10">
        Add you basic store information and complete the setup
      </p>
      <hr />

      <div className="flex flex-col lg:flex-row my-10">
        <StoreFormText />
        <div className="border border-gray-300 rounded-md shadow-md p-5 w-full lg:w-1/2 mx-auto">
          <StoreForm />
        </div>
      </div>
    </div>
  );
};

export default CreateStorePage;
