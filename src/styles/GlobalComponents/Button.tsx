import React from "react";

import { ButtonBack, ButtonFront } from "./index";

interface ButtonProps {
  alt?: boolean;
  disabled?: boolean;
  form?: boolean;
  children?: any;
  onClickFN?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({
  alt,
  disabled,
  form,
  children,
  onClickFN,
}) => {
  return (
    <ButtonBack alt={alt} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} onClick={onClickFN} disabled={disabled}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
};
export default Button;
