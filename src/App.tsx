function App() {
  return (
    <>
      <body className="bg-gray-300 min-h-screen">
        <header className="bg-green-500 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl font-semibold">DSFilter</h1>
            <span className="text-white text-sm">6 produto(s)</span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6">
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

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>

              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>

              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>

              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>

              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>

              <div className="border-2 border-green-400 rounded-md p-4 bg-green-50">
                <div className="text-gray-700 text-sm mb-1">PC Gamer Pro</div>
                <div className="text-green-600 font-semibold text-lg">
                  R$ 1200.00
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
