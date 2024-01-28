import React from "react";

type Props = {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: string;
  className?: string;
};

const SearchIcon = (props: Props) => {
  const { width, height, className, opacity } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 24 24"
      fill-rule="evenodd"
    >
      <g>
        <path
          d="m13.691 15.105 6.102 6.103a1 1 0 0 0 1.414-1.415l-6.101-6.102A6.971 6.971 0 0 0 16.5 9.5c0-3.864-3.136-7-7-7-3.863 0-7 3.136-7 7 0 3.863 3.137 7 7 7a6.965 6.965 0 0 0 4.191-1.395zM9.5 4.5c2.76 0 5 2.24 5 5 0 2.759-2.24 5-5 5-2.759 0-5-2.241-5-5 0-2.76 2.241-5 5-5zm0 1.5A3.501 3.501 0 0 0 6 9.5C6 11.431 7.568 13 9.5 13S13 11.431 13 9.5C13 7.568 11.432 6 9.5 6z"
          fill="white"
          className={className}
          opacity={opacity}
          data-original="white"
        ></path>
      </g>
    </svg>
  );
};

export default SearchIcon;
