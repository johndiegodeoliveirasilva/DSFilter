import { use, useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import * as productService from "../../services/product-services";
import type { ProductDTO } from "../../assets/models/product";

export default function Dashboard() {

  const [products, setProducts] = useState<ProductDTO[]>([]);


  useEffect(() => {
    setProducts(productService.findByPrice(0, 10000))
  })
  
  return (
    <>
      <body className="bg-gray-300 min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <Filter />
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              { products.map((product) => (
              <ProductList product={product} />
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
