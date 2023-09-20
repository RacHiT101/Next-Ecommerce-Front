// import { Product } from "@/models/Product";

// export async function getServerSideProps(context) {
//     const res = await mongoose.connect(process.env.MONGODB_URI)
//     const {id} = context.query;
//     const product = await Product.findById(id);
//     return {
//       props: {
//         product: JSON.parse(JSON.stringify(product)),
//       }
//     }
//   }