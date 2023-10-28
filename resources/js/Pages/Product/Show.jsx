import React from 'react'
import { Link, Head, usePage } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import Tags from './Shared/Tags';

export default function Show() {
    const { product, ziggy: { url }, auth } = usePage().props;

    const content = (
        <div className="bg-white">
            <Head title={product.name} />
            <div className="mx-auto max-w-2xl px-12 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route('products.index')}
                >
                    <span>Back</span>
                    <span className="hidden md:inline"></span>
                </Link>
            </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.image ? `${url}/${product.image}` : 'https://picsum.photos/300/400'}
                                alt={product.name}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link href={route('products.index')}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                <p className="mt-1 text-sm text-gray-500">Stock: {product.stock}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">BDT {product.price}</p>
                        </div>
                        <Tags tags={product.tags} />
                    </div>
                </div>
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
}
