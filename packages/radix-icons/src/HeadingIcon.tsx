import * as React from 'react';
import { BaseIconProps } from './types';

interface HeadingIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const HeadingIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: HeadingIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.12422 2.5002C2.12422 2.29309 2.29211 2.1252 2.49922 2.1252H6.49922C6.70633 2.1252 6.87422 2.29309 6.87422 2.5002C6.87422 2.70731 6.70633 2.8752 6.49922 2.8752H5V7.05H10V2.8752H8.49922C8.29211 2.8752 8.12422 2.70731 8.12422 2.5002C8.12422 2.29309 8.29211 2.1252 8.49922 2.1252H12.4992C12.7063 2.1252 12.8742 2.29309 12.8742 2.5002C12.8742 2.70731 12.7063 2.8752 12.4992 2.8752H11V12.1252H12.4992C12.7063 12.1252 12.8742 12.2931 12.8742 12.5002C12.8742 12.7073 12.7063 12.8752 12.4992 12.8752H8.49922C8.29211 12.8752 8.12422 12.7073 8.12422 12.5002C8.12422 12.2931 8.29211 12.1252 8.49922 12.1252H10V7.95H5V12.0752H6.49922C6.73394 12.0752 6.92422 12.2655 6.92422 12.5002C6.92422 12.7349 6.73394 12.9252 6.49922 12.9252H2.49922C2.2645 12.9252 2.07422 12.7349 2.07422 12.5002C2.07422 12.2655 2.2645 12.0752 2.49922 12.0752H4V2.8752H2.49922C2.29211 2.8752 2.12422 2.70731 2.12422 2.5002Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HeadingIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HeadingIcon;
