import { Link } from "@inertiajs/react";

import Menu from "@/Shared/Menu";
import SearchFilter from "@/Shared/SearchFilter";


export default function Guest({ children }) {
    return (
        <div>
            <Menu />
            <SearchFilter />
            <div className="w-full bg-white overflow-hidden">{children}</div>
        </div>
    );
}
