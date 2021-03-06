import * as React from 'react';
import { BaseIconProps } from './types';

interface HeightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const HeightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: HeightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.18131 1.68179C7.35705 1.50605 7.64197 1.50605 7.81771 1.68179L10.3177 4.18179C10.4934 4.35753 10.4934 4.64245 10.3177 4.81819C10.142 4.99392 9.85705 4.99392 9.68131 4.81819L7.94951 3.08638L7.94951 11.9136L9.68131 10.1818C9.85705 10.0061 10.142 10.0061 10.3177 10.1818C10.4934 10.3575 10.4934 10.6424 10.3177 10.8182L7.81771 13.3182C7.73332 13.4026 7.61886 13.45 7.49951 13.45C7.38016 13.45 7.2657 13.4026 7.18131 13.3182L4.68131 10.8182C4.50558 10.6424 4.50558 10.3575 4.68131 10.1818C4.85705 10.0061 5.14197 10.0061 5.31771 10.1818L7.04951 11.9136L7.04951 3.08638L5.31771 4.81819C5.14197 4.99392 4.85705 4.99392 4.68131 4.81819C4.50558 4.64245 4.50558 4.35753 4.68131 4.18179L7.18131 1.68179Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HeightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HeightIcon;
