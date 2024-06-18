"use server";

import { db } from "@/app/_lib/prisma";

export const serachForRestaurants = async (search: string) => {
    const restaurants = await db.restaurant.findMany({
        where: {
            name: {
                contains: search,
                mode: 'insensitive',
            },
        },
    });

    return restaurants;
}