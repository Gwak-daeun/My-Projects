const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model{
    static init(sequelize){
        return super.init({ 
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            lookName: {
                type: DataTypes.STRING(30),
                allowNull: false  
            },
            top: {
                type: DataTypes.STRING(30),
                allowNull: true  
            },
            bottom: {
                type: DataTypes.STRING(30),
                allowNull: true  
            },
            dress: {
                type: DataTypes.STRING(30),
                allowNull: true  
            },
            outer: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            shoes: {
                type: DataTypes.STRING(30),
                allowNull: true  
            },
            acc: {
                type: DataTypes.STRING(30),
                allowNull: true  
            },
            rateAverage: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            createdAt: {
                type: DataTypes.STRING(30),
                allowNull: true
            }
        
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', 
        sequelize,
        timestamps: false
    })
    }
    static associate(db) {
        db.Post.belongsTo(db.User); 
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}); 
        db.Post.hasMany(db.Comment); 
        db.Post.hasMany(db.Image); 
        db.Post.belongsToMany(db.User, {through: 'Like', as:'Likers'} ); 
        db.Post.hasMany(db.Reference); 
    };
}



