module.exports = {
  port: process.env.PORT || 3001,
  database:
    process.env.MONGODB_URI ||
    "mongodb+srv://DevKarol:Mongo123@cluster1.nxmuh.mongodb.net/strenghtbible?retryWrites=true&w=majority",
};
