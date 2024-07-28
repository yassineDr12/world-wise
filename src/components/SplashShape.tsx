// src/components/SplashShape.js

import React from "react";
import { JSX } from "react/jsx-runtime";

function SplashShape(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M719.5 352.5c-20.9 64.1-53 126.7-107.6 159.1-54.5 32.3-130.7 35.4-192.9 14.7-62.1-20.7-109.1-66.6-164.8-100.5C199 392.8 123.7 361.6 79.4 308.6c-44.3-52.9-54-130-30.6-194.7C72.3 48.4 121 12.5 174.7 6.8c53.6-5.7 111.1 18.8 167.6 37.8 56.5 19 111.8 31.5 171.5 55.1 59.7 23.7 123.9 62.4 145.8 122.7 21.9 60.2-6.5 134.5-27.3 199.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SplashShape;
