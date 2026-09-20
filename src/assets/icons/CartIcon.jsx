import React from "react";

const CartIcon = ({ className }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M209.992 166.667H700L633.333 400H245.89M666.667 533.333H266.667L200 100H100M300 666.667C300 685.077 285.076 700 266.667 700C248.257 700 233.333 685.077 233.333 666.667C233.333 648.257 248.257 633.333 266.667 633.333C285.076 633.333 300 648.257 300 666.667ZM666.667 666.667C666.667 685.077 651.743 700 633.333 700C614.923 700 600 685.077 600 666.667C600 648.257 614.923 633.333 633.333 633.333C651.743 633.333 666.667 648.257 666.667 666.667Z"
        stroke="currentColor"
        strokeWidth="66.6667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartIcon;
