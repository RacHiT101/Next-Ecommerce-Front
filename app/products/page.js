
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { getServerSideProps } from "@/lib/props2";

export default async function ProductsPage() {

    const products = await getServerSideProps();
    console.log(products);
  return (
    <>
      <Header />
      <div className="px-5 mx-10">
        <h1>All products</h1>
        <ProductGrid products={products?.props?.products} />
      </div>
    </>
  );
}