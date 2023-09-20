import { Product } from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  mongoose.connect(process.env.MONGODB_URI);

  // console.log(req.searchParams.id);
//   console.log(req);
  const { ids } = await req.json();
//   console.log(ids);
  // console.log(param);

  const data = await Product.find({_id: ids})

  return NextResponse.json(data);
}
