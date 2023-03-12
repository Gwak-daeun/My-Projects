const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Image extends Model {
    static init(sequelize){
        return super.init({ 
            src: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            
        }, {
            modelName: 'Image',
            tableName: 'images',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize,
        })
    }
    static associate(db) {
        db.Image.belongsTo(db.Post);
        db.Comment.belongsTo(db.Comment);
        db.Image.belongsTo(db.User);
        db.Image.belongsTo(db.Reference);
    };
// belongsTo가 있는 곳의 테이블에 컬럼명이 UserId, PostId와 같은 형식으로 생긴다.
}

