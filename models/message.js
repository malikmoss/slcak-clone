export default (sequelize, DataTypes) => {
    const Message = sequelize.define('user', {
        text: {
            type: DataTypes.STRING,
        },
    });

    Message.associate = (models) => {
        Message.belongsTo(models.Channel, {
            foreignKey: 'channelId',
        });
        Message.belongs(models.User, {
            foreignKey: 'userId'
        });
    };

    return Message;
}