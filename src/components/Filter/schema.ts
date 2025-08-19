import { z } from "zod"

export const filterSchema = z.object(
    {
        minPrice: z.preprocess(
            (val) => (val === "" ? undefined : Number(val)),
            z.number().nonnegative().optional()
        ),
        maxPrice: z.preprocess(
            (val) => (val === "" ? undefined: Number(val)),
            z.number().nonnegative().optional()
        )
    }
).refine((data) => {
    if (data.minPrice && data.maxPrice) {
        return data.maxPrice >= data.minPrice;
    }
    return true;
}, {
    message: "Preço máximo deve ser maior ou igual ao mínimo",
    path: ["maxPrice"],
});


export type FilterFormData = z.infer<typeof filterSchema>;