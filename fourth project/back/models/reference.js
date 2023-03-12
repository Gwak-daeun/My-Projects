const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Reference extends Model{
    static init(sequelize){
        return super.init({
            content: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            referSrc:{
                type: DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', 
        sequelize
        })
    }
    static associate(db){
        db.Reference.belongsTo(db.Post);
        db.Reference.belongsTo(db.User);
        db.Reference.hasMany(db.Image);
    };
}