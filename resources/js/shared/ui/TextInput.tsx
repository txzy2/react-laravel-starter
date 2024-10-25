import React from 'react';
import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';

interface Props {
  type?: string;
  className?: string;
  isFocused?: boolean;
  [props: string]: any;
}

export default forwardRef(function TextInput(
  {type = 'text', className = '', isFocused = false, ...props}: Props,
  ref
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus()
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
        className
      }
      ref={localRef}
    />
  );
});
