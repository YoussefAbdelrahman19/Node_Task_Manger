const notFound = (req, res) =>
  res.status (404).send ({message: 'route not found'});
module.exports = notFound;
