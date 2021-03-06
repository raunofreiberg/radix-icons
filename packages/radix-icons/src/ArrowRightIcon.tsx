import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ArrowRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ArrowRightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
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
          d="M7.79289 2.79289C8.18342 2.40237 8.81658 2.40237 9.20711 2.79289L13.2071 6.79289C13.5976 7.18342 13.5976 7.81658 13.2071 8.20711L9.20711 12.2071C8.81658 12.5976 8.18342 12.5976 7.79289 12.2071C7.40237 11.8166 7.40237 11.1834 7.79289 10.7929L10.0858 8.5H2.5C1.94772 8.5 1.5 8.05228 1.5 7.5C1.5 6.94772 1.94772 6.5 2.5 6.5H10.0858L7.79289 4.20711C7.40237 3.81658 7.40237 3.18342 7.79289 2.79289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowRightIcon;
