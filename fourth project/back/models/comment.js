const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
    static init(sequelize){
        return super.init({ 
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            rate: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
            
        }, {
            charset: 'utf8mb4', //utf8: 한글 지원, mb4: 이모티콘 지원
            collate: 'utf8mb4_general_ci', //한글 저장
            sequelize
        });
    }
    static associate(db){
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
        db.Comment.hasMany(db.Image);
    };
// belongsTo가 있는 곳의 테이블에 컬럼명이 UserId, PostId와 같은 형식으로 생긴다.
}

