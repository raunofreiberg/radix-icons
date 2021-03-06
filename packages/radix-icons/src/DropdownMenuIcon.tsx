import * as React from 'react';
import { BaseIconProps } from './types';

interface DropdownMenuIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const DropdownMenuIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: DropdownMenuIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.99998 3.49997C6.99998 3.22383 7.22384 2.99997 7.49998 2.99997H14.5C14.7761 2.99997 15 3.22383 15 3.49997C15 3.77611 14.7761 3.99997 14.5 3.99997H7.49998C7.22384 3.99997 6.99998 3.77611 6.99998 3.49997ZM6.99998 5.99997C6.99998 5.72383 7.22384 5.49997 7.49998 5.49997H14.5C14.7761 5.49997 15 5.72383 15 5.99997C15 6.27611 14.7761 6.49997 14.5 6.49997H7.49998C7.22384 6.49997 6.99998 6.27611 6.99998 5.99997ZM7.5 7.99997C7.22386 7.99997 7 8.22383 7 8.49997C7 8.77611 7.22386 8.99997 7.5 8.99997H14.5C14.7761 8.99997 15 8.77611 15 8.49997C15 8.22383 14.7761 7.99997 14.5 7.99997H7.5ZM6.99998 11C6.99998 10.7238 7.22384 10.5 7.49998 10.5H14.5C14.7761 10.5 15 10.7238 15 11C15 11.2761 14.7761 11.5 14.5 11.5H7.49998C7.22384 11.5 6.99998 11.2761 6.99998 11ZM5 6H0L2.5 9.25L5 6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DropdownMenuIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DropdownMenuIcon;
