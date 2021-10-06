import toast from "react-hot-toast";

export const payStackProps = (
  userInfo,
  cartItems,
  totalPrice,
  handlePayStackOnSuccess
) => {
  return {
    email: "sperhit.1@gmail.com",
    amount: totalPrice * 100,
    publicKey: "pk_live_85a09e60704584bd6c1b72940ec6c45c119478df",
    text: `Pay GH₵  ${cartItems.length === 0 ? "0" : totalPrice}`,
    currency: "GHS",
    channels: ["mobile_money"],
    onSuccess: (res) => handlePayStackOnSuccess(res),
    onClose: () => toast.error('wait!! You Need This Flood, Don"t Go!!!!!!'),
  };
};
