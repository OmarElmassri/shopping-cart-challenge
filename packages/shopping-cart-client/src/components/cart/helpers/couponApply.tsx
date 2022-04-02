import React, { useState } from "react";
import NormalButton from "../../common/buttons/normalButton";
import HeadTextField from "../../common/fields/headTextField";

interface CouponApplyProps {
  applyCoupon: () => void;
}

const CouponApply = ({ applyCoupon }: CouponApplyProps) => {
  const [coupon, setCoupon] = useState<string>("");

  const checkCoupon = () => {};

  return (
    <div className="flex-nowrap align-end">
      <HeadTextField
        value={coupon}
        onChange={setCoupon}
        place="coupon-code"
        innerPlace="enter-coupon"
      />
      <NormalButton
        content="apply"
        onClick={checkCoupon}
        second
        // radial
        classes="start-med-marg"
      />
    </div>
  );
};

export default CouponApply;
