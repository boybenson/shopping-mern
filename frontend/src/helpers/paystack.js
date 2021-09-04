import toast from "react-hot-toast";

export const payStackProps = (
  userInfo,
  cartItems,
  totalPrice,
  handlePayStackOnSuccess
) => {
  return {
    email: userInfo?.email,
    amount: totalPrice * 100,
    publicKey: "pk_live_8b5be9684d8783a15e67bdb9c5418f3edffe302a",
    text: `Pay GH₵  ${cartItems.length === 0 ? "0" : totalPrice}`,
    currency: "GHS",
    channels: ["mobile_money"],
    onSuccess: (res) => handlePayStackOnSuccess(res),
    onClose: () => toast.error('wait!! You Need This Flood, Don"t Go!!!!!!'),
  };
};
