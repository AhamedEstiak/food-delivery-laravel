import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from "@/Layouts/GuestLayout";
import Pagination from "@/Shared/Pagination";

export default function List({ auth, restaurant_list, ziggy: { url }}) {
    const { data,  links } = restaurant_list;
    const { props } = usePage();

    // Access authenticated user data using the auth helper
    //const user = authUser || props.authUser;


    const content = (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        User Restaurants
                    </h2>

                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route('restaurants.create')}
                    >
                    <span>Create</span>
                        <span className="hidden md:inline"></span>
                    </Link>
                    {/* <SearchFilter /> */}
                    {/* <Link
                        className="btn-indigo focus:outline-none"
                        href={route("products.create")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"></span>
                    </Link> */}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="group relative bg-white overflow-hidden shadow-sm sm:rounded-lg p-3"
                        >
                            {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={
                                        product.image
                                            ? `${url}/${product.image}`
                                            : "https://picsum.photos/300/400"
                                    }
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div> */}
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {/* <Link
                                            href={route("restaurant.show", {
                                                restaurant: restaurant,
                                            })}
                                        > */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {restaurant.name}
                                        {/* </Link> */}
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">
                                        Stock: {product.stock}
                                    </p> */}
                                </div>
                                {/* <p className="text-sm font-medium text-gray-900">
                                    BDT {product.price}
                                </p> */}
                            </div>
                            {/* <Tags tags={product.tags} /> */}
                        </div>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
                        <p className="align-content-center">
                            No restaurant found
                        </p>
                    </div>
                )}
                <Pagination links={links} />
            </div>
        </div>
    );

    return (
        auth.user ?
            <AuthenticatedLayout
                user={auth.user}
            >
                {content}
            </AuthenticatedLayout>
            :
            <GuestLayout>
                {content}
            </GuestLayout>
    );

    // return (
    //     <GuestLayout>
    //         <Head title="Restaurant list" />
    //         <h1 className="center">Restaurant list</h1>
    //         {content}
    //     </GuestLayout>
    // );
}