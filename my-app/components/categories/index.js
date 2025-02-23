import React from "react";
import Link from "next/link";



export default function Categories({ categories }) {
  return (
    <div className="categories">
      {categories.map((item) => (
        <Link
          key={item.id}
          className="category"
          href={`/${item.id}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}