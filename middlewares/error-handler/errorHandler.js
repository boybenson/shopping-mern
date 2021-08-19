export const handleError = (err, req, res, next) => {
  res.json(err);
};
