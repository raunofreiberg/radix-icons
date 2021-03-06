import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterCaseUppercaseIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const LetterCaseUppercaseIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: LetterCaseUppercaseIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.60119 2.75C3.80997 2.75 3.99678 2.87973 4.0697 3.07537L7.17075 11.3949C7.2672 11.6537 7.13562 11.9416 6.87687 12.0381C6.61812 12.1345 6.33018 12.003 6.23373 11.7442L5.21682 9.01603H1.98555L0.968647 11.7442C0.8722 12.003 0.584254 12.1345 0.325502 12.0381C0.0667502 11.9416 -0.0648234 11.6537 0.0316241 11.3949L3.13268 3.07537C3.2056 2.87973 3.3924 2.75 3.60119 2.75ZM3.60119 4.68157L4.89999 8.16603H2.30238L3.60119 4.68157ZM11.4012 2.75C11.61 2.75 11.7968 2.87973 11.8697 3.07537L14.9707 11.3949C15.0672 11.6537 14.9356 11.9416 14.6769 12.0381C14.4181 12.1345 14.1302 12.003 14.0337 11.7442L13.0168 9.01603H9.78555L8.76865 11.7442C8.6722 12.003 8.38425 12.1345 8.1255 12.0381C7.86675 11.9416 7.73517 11.6537 7.83162 11.3949L10.9327 3.07537C11.0056 2.87973 11.1924 2.75 11.4012 2.75ZM11.4012 4.68157L12.7 8.16603H10.1024L11.4012 4.68157Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LetterCaseUppercaseIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LetterCaseUppercaseIcon;
