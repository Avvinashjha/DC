import React from "react";

function IconLight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16 12 A4 4 0 0 1 12 16 A4 4 0 0 1 8 12 A4 4 0 0 1 16 12 z" />
            <path d="M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31L6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" />
        </svg>
    );
}

export default IconLight;
