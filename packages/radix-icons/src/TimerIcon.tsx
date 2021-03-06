import * as React from 'react';
import { BaseIconProps } from './types';

interface TimerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const TimerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: TimerIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 0.849976C7.22386 0.849976 7 1.07383 7 1.34998V3.52234C7 3.79848 7.22386 4.02234 7.5 4.02234C7.77614 4.02234 8 3.79848 8 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.5 13.15C4.37959 13.15 1.85 10.6204 1.85 7.49998C1.85 6.10612 2.35409 4.83128 3.19051 3.8459C3.36921 3.63538 3.34341 3.31985 3.13289 3.14115C2.92236 2.96245 2.60683 2.98825 2.42813 3.19877C1.44408 4.35808 0.849998 5.86029 0.849998 7.49998C0.849998 11.1727 3.8273 14.15 7.5 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.5 0.849976ZM6.74051 8.08072L4.22365 4.57237C4.15233 4.47295 4.16348 4.33652 4.25 4.25C4.33652 4.16348 4.47295 4.15233 4.57237 4.22365L8.08072 6.74051C8.56229 7.08599 8.61909 7.78091 8.2 8.2C7.78091 8.61909 7.08599 8.56229 6.74051 8.08072Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TimerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TimerIcon;
