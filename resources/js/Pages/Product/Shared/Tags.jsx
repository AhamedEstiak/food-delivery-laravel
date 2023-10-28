import React from 'react'
import { Link } from '@inertiajs/react';

function Tags({ tags }) {
    const splittedTags = tags.split(',');

    return (
        <div className="mt-5">
            {splittedTags.map((tag, i) =>
                <span key={tag + i} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    <Link href={`${route('products.index')}?tag=${tag}`}>
                        {tag}
                    </Link>
                </span>
            )}
        </div>
    )
}

export default Tags;