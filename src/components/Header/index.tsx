import ProductCount from "../ProductCount";

export default function Header() {
    return (
        <header className="bg-green-500 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl font-semibold">DSFilter</h1>
            <ProductCount />
          </div>
        </header>
    )
}