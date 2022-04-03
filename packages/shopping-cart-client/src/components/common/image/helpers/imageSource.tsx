import React from "react";
// Packages
import { Image } from "antd";
import { Resize } from "../../../../utils/interfaces";

interface ImageSourceProps {
  source: string;
  loaded: boolean;
  setLoaded: (value: boolean) => void;
  resize?: Resize;
  preview?: boolean;
}

const ImageSource = ({
  source,
  loaded,
  setLoaded,
  resize,
  preview,
}: ImageSourceProps) => {
  // Previe enabled
  if (preview)
    return (
      <Image
        src={source}
        onLoad={() => setLoaded(true)}
        className={`ant-image-${resize ? resize : "cover"} ${
          !loaded ? "none-imp" : ""
        } full-width-imp full-height-imp pointer`}
      />
    );

  // Normal image render
  return (
    <img
      src={source}
      onLoad={() => setLoaded(true)}
      className={`fit-${resize ?? "cover"} ${
        !loaded ? "none" : ""
      } absolute full-width full-height`}
    />
  );
};

export default ImageSource;
