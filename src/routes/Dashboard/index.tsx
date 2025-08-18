import Filter from "../../components/Filter";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

export default function Dashboard() {
  return (
    <>
      <body className="bg-gray-300 min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <Filter />
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <ProductList />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
