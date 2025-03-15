
import { getAllCategories } from "@/utils/getAllCategories";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories()
  console.log(allCategories);


  return <div className="p-5 bg-base-300">
    <h1 className="m-0 text-xl font-semibold">Categories</h1>
    <div className="divider mt-0"></div>

    {
      allCategories.map(category => <Link key={category._id} href={`/categories/news?category=${category.title.toLowerCase()}`}><button className="mb-5 uppercase btn btn-outline w-full">{category.title}</button></Link>)
    }



  </div>;
};

export default CategoryList;
