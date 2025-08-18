export default function Filter() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="max-w-sm space-y-4">
        <div>
          <input
            type="text"
            placeholder="Preço mínimo"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Preço máximo"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors font-medium">
          Filtrar
        </button>
      </div>
    </div>
  );
}
