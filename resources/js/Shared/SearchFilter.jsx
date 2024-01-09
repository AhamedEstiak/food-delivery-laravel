import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";

const SearchFilter = ({onSearch}) => {
    const [values, setValues] = useState({
        search: "",
    });

    function reset() {
        setValues({
            search: "",
        });
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.replace(route("products.index") + `?search=${values.search}`);
    }

    return (
        <form
            name="searchForm"
            onSubmit={handleSubmit}
            className="flex items-center w-full mr-4"
        >
            <input
                className="relative w-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm p-3 border-0"
                autoComplete="off"
                type="text"
                name="search"
                value={values.search}
                onChange={handleChange}
                placeholder="Search product ..."
            />
            {/* <Link href={`${route('products.index')}?search=${values.search}`} className="px-6 py-3 font-bold text-white bg-green-500 rounded">
        Search
      </Link> */}
            <button
                type="submit"
                className="px-6 py-3 font-bold text-white bg-green-500"
            >
                Search
            </button>
        </form>
    );
};

export default SearchFilter;

{
    /* <div className="flex items-center w-full max-w-md mr-4">
      <input
        className="relative w-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm sm:rounded-lg p-3"
        autoComplete="off"
        type="text"
        name="search"
        value={values.search}
        onChange={handleChange}
        placeholder="Search product ..."
      />

    </div> */
}
