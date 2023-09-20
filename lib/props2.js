import { Product } from "@/models/Product";
import mongoose from "mongoose";


export async function getServerSideProps() {
    
    // await mongooseConnect();
    const res = await mongoose.connect(process.env.MONGODB_URI)
    // console.log("res: ", res);
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    // console.log(products);
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  }