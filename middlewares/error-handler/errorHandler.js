export const handleError = (err, req, res, next) => {
  try {
    res.json(err);
  } catch (error) {
    console.log(error.message);
  }
};
