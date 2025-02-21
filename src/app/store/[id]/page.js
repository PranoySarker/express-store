import Image from "next/image";

const getProduct = async (id) => {
  try {
    const res = await fetch(
      `https://glore-bd-backend-node-mongo.vercel.app/api/product/${id}`
    );
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
const ProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="text-red-500">Product not found or failed to load.</div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
    </div>
  );
};

export default ProductPage;
