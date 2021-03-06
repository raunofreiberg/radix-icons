import * as React from 'react';
import { BaseIconProps } from './types';

interface QuestionMarkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const QuestionMarkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: QuestionMarkIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.075 4.10001C5.075 2.91103 6.25722 1.92502 7.5 1.92502C8.74278 1.92502 9.925 2.91103 9.925 4.10001C9.925 5.19861 9.36777 5.71436 8.61849 6.37884L8.58752 6.4063C7.84476 7.06467 6.925 7.87995 6.925 9.5C6.925 9.81757 7.18244 10.075 7.5 10.075C7.81756 10.075 8.075 9.81757 8.075 9.5C8.075 8.41517 8.6294 7.90623 9.38151 7.23925L9.40233 7.22079C10.1495 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21864 0.775024 7.5 0.775024C5.78135 0.775024 3.925 2.12757 3.925 4.10001C3.925 4.41758 4.18244 4.67501 4.5 4.67501C4.81756 4.67501 5.075 4.41758 5.075 4.10001ZM7.5 13.3575C7.98325 13.3575 8.375 12.9657 8.375 12.4825C8.375 11.9992 7.98325 11.6075 7.5 11.6075C7.01675 11.6075 6.625 11.9992 6.625 12.4825C6.625 12.9657 7.01675 13.3575 7.5 13.3575Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`QuestionMarkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default QuestionMarkIcon;
