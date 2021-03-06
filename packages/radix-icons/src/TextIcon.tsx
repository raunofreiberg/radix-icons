import * as React from 'react';
import { BaseIconProps } from './types';

interface TextIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const TextIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: TextIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextIcon;
