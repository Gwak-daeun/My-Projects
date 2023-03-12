const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
    static init(sequelize){
        return super.init({ 
            nickname: {
                type: DataTypes.STRING(30),
                allowNull: false, //필수
                unique: true 
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false, //필수
                
            },
            info: {
                type: DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            charset: 'utf8',
            collate: 'utf8_general_ci', //한글 저장
            sequelize
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.hasMany(db.Reference);
        db.User.belongsToMany(db.Post, {through: 'Like', as : 'Liked'}); //Like : 중간 테이블 이름
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FolloweingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
        db.User.hasOne(db.Image);
    };
}

