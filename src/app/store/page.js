import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const StorePage = async () => {
  let productsData = [];
  try {
    const res = await fetch(
      "https://glore-bd-backend-node-mongo.vercel.app/api/product"
    );
    const data = await res.json();
    productsData = data.data;
    console.log(productsData);
  } catch (error) {
    console.log(error);
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsData?.map((product) => (
            <Link key={product._id} href={`/store/${product._id}`}>
              <div className="border border-gray-200 w-80 shadow-md rounded-md">
                {product?.images?.length > 0 && (
                  <Image
                    src={product.images[0].secure_url}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-96 object-cover border border-gray-300"
                  />
                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-center">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 text-center">
                    {product.description}
                  </p>
                  <p className="text-gray-500 text-center">
                    Category: {product.category.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default StorePage;
