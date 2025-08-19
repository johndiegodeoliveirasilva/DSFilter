import type { ProductDTO } from "../../assets/models/product";

type Props = {
    product: ProductDTO;
}

export default function ProductList({ product}: Props) {
  return (
    <>
      <div className="border-2 border-green-400 rounded-md p-4 bg-green-50" >
        <div className="text-gray-700 text-sm mb-1">{product.name}</div>
        <div className="text-green-600 font-semibold text-lg">R$ {product.price}</div>
      </div>
    </>
  );
}
