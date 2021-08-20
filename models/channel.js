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
    Channel.belongsToMany(models.User, {
        through: 'channel_member',
        foreignKey: {
            name: 'channelId',
            field: 'channel_id',
        }
    })

    return Channel;
}