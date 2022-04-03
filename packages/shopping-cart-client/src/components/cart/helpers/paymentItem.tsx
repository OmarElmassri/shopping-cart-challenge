import React from "react";
import { numberWithCommas } from "../../../utils/helperFunctions";
import TextItem from "../../common/text/TextItem";

interface IPaymentItemProps {
  name: string;
  value: number;
  textClasses?: string;
  classes?: string;
}

const PaymentItem: React.FunctionComponent<IPaymentItemProps> = ({
  name,
  value,
  textClasses,
  classes,
}: IPaymentItemProps) => {
  return (
    <div className={`flex-nowrap justify-space-between ${classes}`}>
      <TextItem content={name} classes={`tiny-med ${textClasses}`} />
      <TextItem
        content="price"
        params={{ value: numberWithCommas(value) ?? "0" }}
        classes={`tiny-hev ${textClasses}`}
      />
    </div>
  );
};

export default PaymentItem;
