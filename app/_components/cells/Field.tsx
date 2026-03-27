import clsx from "clsx";
import { ChangeEvent } from "react";

interface FieldProps {
  type?: string;
  name: string;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({ type, name, className, onChange, value }: FieldProps) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      className={clsx(className)}
    />
  );
};

export default Field;
