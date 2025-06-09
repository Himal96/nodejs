
const makeUserTable = (sequelize, Datatypes) => {
  const user = sequelize.define("users", {
    username: {
      type: Datatypes.STRING,
    },
    email: {
      type: Datatypes.STRING,
    },
    password: {
      type: Datatypes.STRING,
    },
    confirm_password: {
      type: Datatypes.STRING,
    },
  });

  return user;
};

module.exports = makeUserTable;
