import { use, useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import * as productService from "../../services/product-services";
import type { ProductDTO } from "../../assets/models/product";

type QueryParams = {
  minPrice: number;
  maxPrice: number;
};

export default function Dashboard() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  function handleFilter(queryParams: string) {
    setProducts([]);
    setQueryParams({
      ...queryParams,
      minPrice: queryParams.minPrice,
      maxPrice: queryParams.maxPrice,
    });
  }
  useEffect(() => {
    setProducts(productService.findByPrice(queryParams.minPrice, queryParams.maxPrice));
  }, [queryParams]);

  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <Filter onFilter={handleFilter} />
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              {products.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
