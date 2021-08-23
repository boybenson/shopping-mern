import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
};

export const VERIFY_TRANSACTIONS = async (req, res, next) => {
  const referenceID = req.query.reference;
  const apiReq = await axios.get(
    `https://api.paystack.co/transaction/verify/${referenceID}`,
    {
      headers,
    }
  );

  if (apiReq.status === 200 || apiReq.status === true) {
    console.log(req.body);
  }
};
