import { useState } from "react";

import { filterSchema } from "./schema";
import type { FilterFormData } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onFilter: (params: FilterFormData) => void;
};

export default function Filter({ onFilter }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      minPrice: undefined,
      maxPrice: undefined
    }
  });

  function onSubmit(data: FilterFormData) {
    const queryParams = {
      minPrice: data.minPrice ?? 0,
      maxPrice: data.maxPrice ?? Number.MAX_VALUE,
    }
    onFilter(queryParams)
  }

  function handleResetFilter() {
    reset();
    onFilter({ minPrice: 0, maxPrice: Number.MAX_VALUE });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-sm p-6 mb-6"
      >
        <div className="max-w-sm space-y-4">
          <div>
            <input
              type="number"
              placeholder="Preço mínimo"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register('minPrice')}
            />
            {errors.minPrice && (
              <p className="text-red-500 text-sm">{errors.minPrice.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Preço máximo"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register('maxPrice')}
            />
            {errors.maxPrice && (
              <p className="text-red-500 text-sm">{errors.maxPrice.message}</p>
            )}
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
