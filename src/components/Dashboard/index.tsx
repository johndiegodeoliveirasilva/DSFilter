import { use, useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import * as productService from "../../services/product-service";
import type { ProductDTO } from "../../assets/models/product";
import { ContextCount } from "../../utils/context-count";

type QueryParams = {
  minPrice: number;
  maxPrice: number;
};

export default function Dashboard() {
  const { setContextCount } = useContext(ContextCount);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  function handleFilter(queryParams: QueryParams) {
    setProducts([]);
    setQueryParams(queryParams);
  }
  useEffect(() => {
    const productsFilter = productService.findByPrice(
      queryParams.minPrice,
      queryParams.maxPrice
    );
    setProducts(productsFilter);
    setContextCount(productsFilter.length);
  }, [queryParams]);

  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <Filter onFilter={handleFilter} />
          {products.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                {products.map((product) => (
                  <ProductList key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 center">
              Nenhum produto encontrado!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
