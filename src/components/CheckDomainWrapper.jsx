"use client";

import CheckDomain from "./CheckDomain";

const CheckDomainWrapper = () => {
  return (
    <>
      <p className="text-xl font-semibold text-center text-gray-500 my-4">
        to access your store you should check your domain first
      </p>
      <div className="border border-gray-300 rounded-md shadow-md p-5 w-1/2 mx-auto">
        <CheckDomain />
      </div>
    </>
  );
};

export default CheckDomainWrapper;
