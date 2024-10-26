import React from 'react';
import {Loader} from 'lucide-react';

import {FadeIn, Hover, UpToDownAnimate} from '@/shared/animations';

interface LoaderProps {
  iconSize?: number;
  className?: string;
  title: {
    need: boolean;
    text?: string;
    size?: number;
  };
  sub?: boolean;
}

const LoaderComponent: React.FC<LoaderProps> = props => {
  return (
    <div className={props.className || 'flex items-center gap-2'}>
      <Loader className='animate-spin' size={props.iconSize || 16} />

      <div className='flex items-center gap-1'>
        {props.title.need && (
          <FadeIn delay={1}>
            <h3
              className={`text-[${
                props.title.size ? props.title.size : 16
              }px] `}
            >
              {props.title.text || 'Loading...'}
            </h3>
          </FadeIn>
        )}

        {props.sub && (
          <FadeIn delay={2}>
            <a className='flex items-center' href='#'>
              <Hover scale={1.05}>
                <img src='/logo2.png' alt='logo' width={80} />
              </Hover>
            </a>
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default LoaderComponent;
