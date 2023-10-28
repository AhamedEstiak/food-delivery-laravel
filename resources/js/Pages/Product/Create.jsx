import React from "react";
import { Link, useForm } from '@inertiajs/react';

const Create = () => {
    const { data, setData, errors, progress, post } = useForm({
        title: "",
        description: "",
        price: "",
        unit: "",
        quantity: "",
        stock: "",
        tags: "",
        image: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('products.store'));
    }

    return (

        <div className="p-10 max-w-lg mx-auto">
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("products.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Products
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
                            <label className="">Price</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Price"
                                name="price"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.price}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Unit</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Unit"
                                name="unit"
                                value={data.unit}
                                onChange={(e) =>
                                    setData("unit", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.unit}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Quantity</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Quantity"
                                name="quantity"
                                value={data.quantity}
                                onChange={(e) =>
                                    setData("quantity", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.quantity}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Stock</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded"
                                label="Stock"
                                name="stock"
                                value={data.stock}
                                onChange={(e) =>
                                    setData("stock", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.stock}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="">Tags</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded border border-gray-200 rounded"
                                label="Tags"
                                placeholder="Enter comma separated tags"
                                name="tags"
                                value={data.tags}
                                onChange={(e) =>
                                    setData("tags", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.tags}
                            </span>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="image" className="inline-block text-lg mb-2">
                                Product image
                            </label>
                            <input
                                type="file"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="image"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            <span className="text-red-600">
                                {errors.image}
                            </span>
                            {/* {data.image &&
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={data.image}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            } */}
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

// Laravel Inertia js CRUD with React v1



// app/resources/js/Pages/Post/Index.js

// import React from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";

// const Index = () => {
//     const { posts } = usePage().props;
//     const { data } = posts;

//     return (
//         <div>
//             <div className="container mx-auto">
//                 <h1 className="mb-8 text-3xl font-bold text-center">Post</h1>
//                 <div className="flex items-center justify-between mb-6">
//                     <InertiaLink
//                         className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
//                         href={route("posts.create")}
//                     >
//                         Create Post
//                     </InertiaLink>
//                 </div>

//                 <div className="overflow-x-auto bg-white rounded shadow">
//                     <table className="w-full whitespace-nowrap">
//                         <thead className="text-white bg-gray-600">
//                             <tr className="font-bold text-left">
//                                 <th className="px-6 pt-5 pb-4">#</th>
//                                 <th className="px-6 pt-5 pb-4">Title</th>
//                                 <th className="px-6 pt-5 pb-4">Description</th>
//                                 <th className="px-6 pt-5 pb-4">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map(({ id, title, description }) => (
//                                 <tr key={id} className="">
//                                     <td className="border-t">
//                                         <InertiaLink
//                                             href={route("posts.edit", id)}
//                                             className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
//                                         >
//                                             {id}
//                                         </InertiaLink>
//                                     </td>
//                                     <td className="border-t">
//                                         <InertiaLink
//                                             href={route("posts.edit", id)}
//                                             className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
//                                         >
//                                             {title}
//                                         </InertiaLink>
//                                     </td>
//                                     <td className="border-t">
//                                         <InertiaLink
//                                             tabIndex="1"
//                                             className="flex items-center px-6 py-4"
//                                             href={route("posts.edit", id)}
//                                         >
//                                             {description}
//                                         </InertiaLink>
//                                     </td>
//                                     <td className="border-t">
//                                         <InertiaLink
//                                             tabIndex="1"
//                                             className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
//                                             href={route("posts.edit", id)}
//                                         >
//                                             Edit
//                                         </InertiaLink>
//                                     </td>
//                                 </tr>
//                             ))}
//                             {data.length === 0 && (
//                                 <tr>
//                                     <td
//                                         className="px-6 py-4 border-t"
//                                         colSpan="4"
//                                     >
//                                         No contacts found.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Index;
// Laravel Inertia js CRUD with React v2



// app/resources/js/Pages/Post/Edit.js

// import React from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

// const Edit = () => {
//     const { post } = usePage().props;
//     const { data, setData, put, errors } = useForm({
//         title: post.title || "",
//         description: post.description || "",
//     });

//     function handleSubmit(e) {
//         e.preventDefault();
//         put(route("posts.update", post.id));
//     }
//     function destroy() {
//         if (confirm("Are you sure you want to delete this user?")) {
//             Inertia.delete(route("posts.destroy", post.id));
//         }
//     }

//     return (
//         <div className="mt-20">
//             <div className="container flex flex-col justify-center mx-auto">
//                 <div>
//                     <h1 className="mb-8 text-3xl font-bold">
//                         <InertiaLink
//                             href={route("posts.index")}
//                             className="text-indigo-600 hover:text-indigo-700"
//                         >
//                             Posts
//                         </InertiaLink>
//                         <span className="font-medium text-indigo-600"> /</span>
//                         Edit
//                     </h1>
//                 </div>
//                 <div className="max-w-3xl p-8 bg-white rounded shadow">
//                     <form name="createForm" onSubmit={handleSubmit}>
//                         <div className="flex flex-col">
//                             <div className="mb-4">
//                                 <label className="">Title</label>
//                                 <input
//                                     type="text"
//                                     className="w-full px-4 py-2 border border-gray-200 rounded"
//                                     label="Title"
//                                     name="title"
//                                     value={data.title}
//                                     onChange={(e) =>
//                                         setData("title", e.target.value)
//                                     }
//                                 />
//                                 <span className="text-red-600">
//                                     {errors.title}
//                                 </span>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="">Description</label>
//                                 <textarea
//                                     type="text"
//                                     className="w-full rounded"
//                                     label="description"
//                                     name="description"
//                                     errors={errors.description}
//                                     value={data.description}
//                                     onChange={(e) =>
//                                         setData("description", e.target.value)
//                                     }
//                                 />
//                                 <span className="text-red-600">
//                                     {errors.description}
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="flex justify-between">
//                             <button
//                                 type="submit"
//                                 className="px-4 py-2 text-white bg-green-500 rounded"
//                             >
//                                 Update
//                             </button>
//                             <button
//                                 onClick={destroy}
//                                 tabIndex="-1"
//                                 type="button"
//                                 className="px-4 py-2 text-white bg-red-500 rounded"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Edit;