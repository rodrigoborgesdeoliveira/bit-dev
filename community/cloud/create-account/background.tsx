import React from "react";

type BackgroundProps = {} & React.SVGAttributes<SVGElement>;

export function Background({ ...rest }: BackgroundProps) {
  return (
    <svg
      {...rest}
      width="774"
      height="336"
      viewBox="0 0 774 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="774" height="336" rx="16" fill="#EBF7F0" />
    </svg>
  );
}
