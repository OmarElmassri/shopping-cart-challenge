import React, { useState } from "react";
import { ICoupon } from "shopping-cart-shared";
import { chaeckCoupon } from "../../../services/coupon";
import { HandleApiHook } from "../../../utils/hooks";
import FloatIconButton from "../../common/buttons/floatIconButton";
import NormalButton from "../../common/buttons/normalButton";
import HeadTextField from "../../common/fields/headTextField";
import CircleLoader from "../../common/loaders/circleLoader";
import TextItem from "../../common/text/TextItem";

interface CouponApplyProps {
  applyCoupon: (coupon: ICoupon) => void;
  setDiscount: (value: number) => void;
  appliedCoupon: ICoupon | null;
  setAppliedCoupon: (value: ICoupon | null) => void;
}

const CouponApply = ({
  applyCoupon,
  setDiscount,
  appliedCoupon,
  setAppliedCoupon,
}: CouponApplyProps) => {
  // Hooks
  const { loading, getErrorItem, submit } = HandleApiHook();
  const [coupon, setCoupon] = useState<string>("");

  const checkCoupon = () => {
    submit({
      service: chaeckCoupon,
      body: {
        couponCode: coupon,
      },
      onSuccess: (coupon: ICoupon) => {
        applyCoupon(coupon);
        setAppliedCoupon(coupon);
      },
    });
  };

  if (appliedCoupon)
    return (
      <div className="flex-nowrap justify-space-between grey3-back all-med-padd">
        <div>
          <TextItem content="applied-coupon" classes="micro-med text-opacity" />
          <TextItem content={appliedCoupon.code} normal classes="sparag-med" />
          <TextItem
            content={
              appliedCoupon.type === "percentage" ? "discount" : "discount-egp"
            }
            params={{ value: appliedCoupon.value.toString() }}
            classes="micro-med second"
          />
        </div>
        <FloatIconButton
          name="close"
          onClick={() => {
            setCoupon("");
            setAppliedCoupon(null);
            setDiscount(0);
          }}
          color="black"
        />
      </div>
    );

  return (
    <div className="flex-nowrap align-end">
      <HeadTextField
        value={coupon}
        onChange={setCoupon}
        error={getErrorItem("coupon")}
        place="coupon-code"
        innerPlace="enter-coupon"
      />
      {loading ? (
        <CircleLoader size="small" classes="start-med-marg" />
      ) : (
        <NormalButton
          content="apply"
          onClick={checkCoupon}
          second
          classes="start-med-marg"
        />
      )}
    </div>
  );
};

export default CouponApply;
