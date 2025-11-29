import React from "react";
import { Link } from "react-router-dom";
import { HOME_CATEGORIES } from "./homeEssentialsData";
import { products } from "../../data/products";

const getCategoryProducts = (type: string) =>
  products.filter((p) => p.type === type);

const HomeEssentials: React.FC = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-8 mb-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Home Essentials</h2>
        <p className="text-base text-gray-700">
          Curated essentials to make your home cozy, stylish, and full of life — from plants and blankets to lamps and books.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {HOME_CATEGORIES.map((cat) => {
          const catProducts = getCategoryProducts(cat.name);
          if (!catProducts.length) return null;

          const bigProduct = catProducts[0];
          const smallProducts = catProducts.slice(1, 4);

          return (
            <Link
              key={cat.name}
              to=""
              className="flex flex-col group"
            >
              {/* Image Grid */}
              <div
                className={`grid grid-cols-3 gap-2 h-[300px] rounded-xl p-2 ${cat.bgColor}
                transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl`}
              >
                {/* Big Image */}
                <div className="col-span-2 row-span-3 overflow-hidden rounded-lg">
                  <img
                    src={bigProduct.image}
                    alt={bigProduct.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Small Images */}
                {smallProducts.map((p, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Text Row */}
              <div className="mt-3 flex items-center justify-center text-sm text-gray-700">
                <h3 className="text-base font-semibold mr-2 text-gray-900">
                  {cat.name}
                </h3>
                <span className="text-gray-500 truncate">
                  {cat.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeEssentials;
