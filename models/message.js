export default (sequelize, DataTypes) => {
    const Message = sequelize.define('user', {
        text: {
            type: DataTypes.STRING,
        },
    });

    Message.associate = (models) => {
        Message.belongsTo(models.Channel, {
            foreignKey: 'channelId',
            field: 'channel_id'
        });
        Message.belongsTo(models.User, {
            foreignKey: 'userId',
            field: 'user_id'
        });
    };

    return Message;
}