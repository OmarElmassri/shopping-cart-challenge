import React, { useState, useEffect } from "react";
// Components
import AvatarSkeleton from "../skeleton/avatarSkeleton";
import { Resize, Shape, Tag } from "../../../utils/interfaces";
import ImageContainer from "./helpers/imageContainer";
import ImageSource from "./helpers/imageSource";
import ImageTag from "./helpers/imageTag";

interface ImageComponentProps {
  image: string;
  fill?: boolean;
  size?: string;
  shape?: Shape;
  tag?: Tag;
  onClick?: () => void;
  resize?: Resize;
  minHeight?: number;
  minWidth?: number;
  preview?: boolean;
  classes?: string;
}

const ImageComponent = ({
  image,
  fill,
  size,
  shape,
  tag,
  onClick,
  resize,
  minHeight,
  minWidth,
  preview,
  classes,
}: ImageComponentProps) => {
  // Hooks
  const [source, setSource] = useState("");
  // Image loading hook
  const [loaded, setLoaded] = useState(false);

  // Set source on change
  useEffect(() => {
    setSource(image ?? "");
  }, [image]);

  // Loader
  const ImageLoader = () => (
    <AvatarSkeleton fill={fill} size={size} shape={shape} />
  );

  return (
    <div
      className={`${
        fill ? "full-height full-width" : "fit-content"
      } relative ${classes}`}
    >
      <ImageContainer
        minHeight={minHeight}
        minWidth={minWidth}
        onClick={!preview ? onClick : () => {}}
        shape={shape}
        size={size}
        fill={fill}
      >
        <ImageSource
          source={source}
          loaded={loaded}
          setLoaded={setLoaded}
          resize={resize}
          preview={preview}
        />
        {!loaded ? <ImageLoader /> : <></>}
      </ImageContainer>
      <ImageTag tag={tag} />
    </div>
  );
};

export default ImageComponent;
