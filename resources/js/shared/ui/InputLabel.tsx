import React from 'react';

interface Props {
  value?: string;
  className?: string;
  children: React.ReactNode;
}

const InputInputLabel: React.FC<Props> = ({
  value,
  className = '',
  children,
  ...props
}) => {
  return (
    <label
      {...props}
      className={`block text-sm font-medium text-gray-700 ` + className}
    >
      {value ? value : children}
    </label>
  );
};

export default InputInputLabel;
