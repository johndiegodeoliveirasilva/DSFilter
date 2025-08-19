import { useState } from "react";

type FormDate = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  onFilter: (params: FormDate) => void;
};

export default function Filter({ onFilter }: Props) {
  const [formDate, setFormDate] = useState<FormDate>({
    minPrice: undefined,
    maxPrice: undefined,
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    const queryParams = {
      minPrice: formDate.minPrice ?? 0,
      maxPrice: formDate.maxPrice ?? Number.MAX_VALUE,
    };

    onFilter(queryParams);
  }

  function handleInpultChange(event: any) {
    const { value, name } = event.target;
    setFormDate({
      ...formDate,
      [name]: value ? Number(value) : undefined,
    });
  }

  function handleResetFilter() {
    setFormDate({});
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm p-6 mb-6"
      >
        <div className="max-w-sm space-y-4">
          <div>
            <input
              type="number"
              placeholder="Preço mínimo"
              onChange={handleInpultChange}
              name="minPrice"
              value={formDate.minPrice || ""}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Preço máximo"
              onChange={handleInpultChange}
              value={formDate.maxPrice || ""}
              name="maxPrice"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Filtrar
            </button>

            <button
              onClick={handleResetFilter}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-color font-medium"
            >
              Resetar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
