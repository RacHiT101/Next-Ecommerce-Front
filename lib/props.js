import { Product } from "@/models/Product";
import mongoose from "mongoose";


export async function getServerSideProps() {
    const featuredProductId = '650a900c5df4dab8e470d220';
    // await mongooseConnect();
    const res = await mongoose.connect(process.env.MONGODB_URI)
    // console.log("res: ", res);
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
  }