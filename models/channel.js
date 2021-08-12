export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN,
        },
    });

    Channel.associate = (models) => {
        Channel.belongsTo(models.Team, {
            foreignKey: 'teamId',
        });
    };

    return Channel;
}