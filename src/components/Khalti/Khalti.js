import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
export default function Khalti() {
  let checkout = new KhaltiCheckout(config);

  return (
    <div
      onClick={() => {
        checkout.show({ amount: 1000 });
      }}
    >
   
      Khalti
    </div>
  );
}
