export default (sequelize, DataTypes) => {
    const Team = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Team.associate = (models) => {
        Team.belongsToMany(models.Team, {
            through: 'member',
            foreignKey: 'teamId',
        });
        Team.belongsToMany(models.User, {
            foreignKey: 'owner'
        });
    };

    return Team;
}