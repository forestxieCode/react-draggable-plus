import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string
}

const IconSort:React.FC<IProps> = (props) => {
  return (
    <svg
      className={classnames('icon', props?.className)}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M384 320l512 0c17.696 0 32-14.336 32-32s-14.304-32-32-32L384 256c-17.664 0-32 14.336-32 32S366.336 320 384 320z"
        fill="#5D646F"
      ></path>
      <path
        d="M896 480 384 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l512 0c17.696 0 32-14.336 32-32S913.696 480 896 480z"
        fill="#5D646F"
      ></path>
      <path
        d="M896 704 384 704c-17.664 0-32 14.304-32 32s14.336 32 32 32l512 0c17.696 0 32-14.304 32-32S913.696 704 896 704z"
        fill="#5D646F"
      ></path>
      <path
        d="M192 288m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"
        fill="#5D646F"
      ></path>
      <path
        d="M192 512m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"
        fill="#5D646F"
      ></path>
      <path
        d="M192 736m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"
        fill="#5D646F"
      ></path>
    </svg>
  );
};

export default IconSort;
