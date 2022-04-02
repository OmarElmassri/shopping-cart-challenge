import React from "react";
// Components
import { GetIcon } from "../../../../assets/IconGenerator";
// Hooks
import { Tag } from "../../interfaces";

interface ImageTagProps {
  tag?: Tag;
}

const ImageTag = ({ tag }: ImageTagProps) => {
  return (
    <div className="absolute bottom-right-tiny-abs">
      {tag && <GetIcon name={tag?.icon} size={tag?.size ?? "tiny"} />}
    </div>
  );
};

export default ImageTag;
