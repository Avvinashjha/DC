import * as React from "react";

function IconMinus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z" />
        </svg>
    );
}

export default IconMinus;
