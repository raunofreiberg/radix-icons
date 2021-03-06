import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CaretUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CaretUpIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.43179 8.56819C4.25605 8.39245 4.25605 8.10753 4.43179 7.93179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.5682 7.93179C10.7439 8.10753 10.7439 8.39245 10.5682 8.56819C10.3924 8.74392 10.1075 8.74392 9.93179 8.56819L7.49999 6.13638L5.06819 8.56819C4.89245 8.74392 4.60753 8.74392 4.43179 8.56819Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.04289 8.95711C3.65237 8.56658 3.65237 7.93342 4.04289 7.54289L6.79289 4.79289C6.98043 4.60536 7.23478 4.5 7.5 4.5C7.76522 4.5 8.01957 4.60536 8.20711 4.79289L10.9571 7.54289C11.3476 7.93342 11.3476 8.56658 10.9571 8.95711C10.5666 9.34763 9.93342 9.34763 9.54289 8.95711L7.5 6.91421L5.45711 8.95711C5.06658 9.34763 4.43342 9.34763 4.04289 8.95711Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.43179 8.56819C4.25605 8.39245 4.25605 8.10753 4.43179 7.93179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.5682 7.93179C10.7439 8.10753 10.7439 8.39245 10.5682 8.56819C10.3924 8.74392 10.1075 8.74392 9.93179 8.56819L7.49999 6.13638L5.06819 8.56819C4.89245 8.74392 4.60753 8.74392 4.43179 8.56819Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretUpIcon;
