import React from "react";
import { Shape } from "../../types";

interface ImageContainerProps {
  fill?: boolean;
  size?: string;
  shape?: Shape;
  children?: JSX.Element | JSX.Element[];
  minHeight?: number;
  minWidth?: number;
  classes?: string;
  onClick?: () => void | null;
}

const ImageContainer = ({
  fill,
  size,
  shape,
  children,
  minHeight,
  minWidth,
  classes,
  onClick,
}: ImageContainerProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        minHeight: minHeight,
        minWidth: minWidth,
      }}
      className={`image-component ${
        fill ? "full-height full-width" : "fit-content"
      } icon-${fill ? "" : size ? size : "tiny"} ${
        shape !== "square" && "radial"
      } ${
        onClick && "pointer"
      } white-back relative overflow-hidden flex ${classes}`}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
