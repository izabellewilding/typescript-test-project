import React, { useRef } from "react";
import { useButton } from "@react-aria/button";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */

// -- CSS STYLES --

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;

  padding: 14px 25px 16px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  font-family: sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

// -- BASE BUTTON COMPONENT

export const ButtonBase = ({ children, ...props }: any) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref as any);

  return (
    <BaseButton {...props} {...buttonProps} ref={ref}>
      {children}
    </BaseButton>
  );
};

export const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primaryColor);
  color: #fff;
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color: #008b6a;
  color: #fff;
`;
