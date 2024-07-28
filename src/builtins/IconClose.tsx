import React from "react";
import classnames from 'classnames';

interface IProps {
  className?: string
  index?: number
  onClick?: (index: number) => void
}

const IconClose:React.FC<IProps> = (props) => {
  return <svg
    className={classnames('icon', props?.className)}
    onClick={() => props.onClick(props.index)}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
 >
  <path
    d="M512 570.88l196.864 196.8 58.88-58.88L570.752 512l196.864-196.864-58.816-58.88L512 453.248 315.136 256.32l-58.88 58.88L453.248 512l-196.864 196.864 58.88 58.88L512 570.752z"
  ></path>
</svg>
}

export default IconClose
