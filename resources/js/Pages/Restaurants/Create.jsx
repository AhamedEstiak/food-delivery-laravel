import React from "react";
import { Link, useForm } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from "@/Layouts/GuestLayout";

const Create = () => {
    const { data, setData, errors, progress, post } = useForm({
        name: "",
        description: "",
        address: "",
        rating: "",
        lat: "",
        lon: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('restaurants.store'));
    }

    return (

        <div className="p-10 max-w-lg mx-auto">
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("products.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Restaurants
                    </Link>
                    <span className="font-medium text-indigo-600"> / </span>
                    Create
                </h1>
            </div>
            <div className="max-w-6xl p-8 bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <label className="">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.name}
                            </span>
                        </div>
                        <div className="mb-0">
                            <label className="">Description</label>
                            <textarea
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="description"
                                name="description"
                                errors={errors.description}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.description}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Address</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Address"
                                name="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.address}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Rating</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="rating"
                                name="rating"
                                value={data.rating}
                                onChange={(e) =>
                                    setData("rating", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.rating}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Latitude</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Latitude"
                                name="lat"
                                value={data.lat}
                                onChange={(e) =>
                                    setData("lat", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.lat}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Longitude</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Longitude"
                                name="lon"
                                value={data.quantity}
                                onChange={(e) =>
                                    setData("lon", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.lon}
                            </span>
                        </div>
                        
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Create;
