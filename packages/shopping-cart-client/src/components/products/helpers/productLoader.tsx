import React from "react";
import { Shape } from "../../../utils/interfaces";
import AvatarSkeleton from "../../common/skeleton/avatarSkeleton";
import LineSkeleton from "../../common/skeleton/lineSkeleton";

const ProductSkeleton: React.FunctionComponent = () => {
  return (
    <div className="single-grid">
      <div className="full-width" style={{ height: 200 }}>
        <AvatarSkeleton fill shape={Shape.square} />
      </div>
      <LineSkeleton rows={2} />
    </div>
  );
};

export default ProductSkeleton;
