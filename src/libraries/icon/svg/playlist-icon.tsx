import React from "react";

type Props = {
  color?: string;
  className?: string;
  children?: React.ReactNode;
};

const PlaylistIcon = (props: Props) => {
  const { color, className, children } = props;
  return (
    <div className="flex">
      <p className={className + ""}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="25"
          className={className + " mr-2"}
          height="25"
          x="0"
          y="0"
          viewBox="0 0 32 32"
          fill-rule="evenodd"
        >
          <g>
            <path
              d="M6.177 25.86v1.139a3 3 0 0 0 3 3H27a3 3 0 0 0 3-3V9.176a3 3 0 0 0-3-3h-1.16V5.037a3 3 0 0 0-3-3H5.017a3 3 0 0 0-3 3V22.86a3 3 0 0 0 3 3zM25.84 8.176V22.86a3 3 0 0 1-3 3H8.177v1.139a1 1 0 0 0 1 1H27a1 1 0 0 0 1-1V9.176a1 1 0 0 0-1-1zM4.017 22.86V5.037a1 1 0 0 1 1-1H22.84a1 1 0 0 1 1 1V22.86a1 1 0 0 1-1 1H5.017a1 1 0 0 1-1-1zm9.808-9.1V7.167a1 1 0 0 1 1.436-.9 11.771 11.771 0 0 1 5.74 4.209 1 1 0 0 1-1.614 1.181 9.782 9.782 0 0 0-3.562-2.997v8.736a4.306 4.306 0 0 1-4.304 4.304 4.307 4.307 0 0 1-4.304-4.304 4.306 4.306 0 0 1 6.608-3.636zm-2.304 1.332a2.305 2.305 0 1 1-.001 4.61 2.305 2.305 0 0 1 .001-4.61z"
              opacity="1"
            ></path>
          </g>
        </svg>
        Your Library
      </p>
    </div>
  );
};

export default PlaylistIcon;
