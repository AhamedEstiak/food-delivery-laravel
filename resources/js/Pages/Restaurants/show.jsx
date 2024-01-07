import React from "react";
import { Link, Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";
import RatingStars from "@/Shared/RatingStars";

export default function show({ restaurant }) {
    console.log(restaurant);

    const content = (
        <div className="flex items-center justify-content-center bg-gray-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
                <div className="group relative bg-white overflow-hidden shadow-sm sm:rounded-lg p-3">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            // src={
                            //     product.image
                            //         ? `${url}/${product.image}`
                            //         : "https://picsum.photos/300/400"
                            // }
                            src={"https://picsum.photos/300/400"
                            }
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                {restaurant.name}
                            </h3>
                            <p>{restaurant.description}</p>
                            <address>{restaurant.address}</address>
                            <div className="mt-2">
                                <RatingStars rating={restaurant.rating} />
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-gray-900 underline hover:no-underline"
                                >
                                    73 reviews
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <GuestLayout>
            <Head title={restaurant.name} />
            {content}
        </GuestLayout>
    );
}
