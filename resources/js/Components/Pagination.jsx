import { Link } from "@inertiajs/react";

export default function Pagination({ pages }) {
    if (pages.length < 4) {
        return;
    }
    const links = pages.map((link, index) =>
        link.url ? (
            <Link
                key={index}
                href={link.url}
                className={`pagination-link ${
                    link.active ? "pagination-link-active" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
            ></Link>
        ) : (
            <span
                key={index}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className="pagination-span"
            ></span>
        )
    );

    return <div className="pagination">{links}</div>;
}
