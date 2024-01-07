import { Link } from "@inertiajs/react";

import Menu from "@/Shared/Menu";


export default function Guest({ children }) {
    return (
        <div>
            <Menu />
            <div className="w-full bg-white overflow-hidden">{children}</div>
        </div>
    );
}
