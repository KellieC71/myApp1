module.exports = function (sequelize, DataTypes) {
  var Meds = sequelize.define("Meds", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Events.associate = function (models) {
    Events.belongsTo(models.User, {
      foriegnKey: {
        allowNull: false
      }
    });
  };
  return meds;
};
