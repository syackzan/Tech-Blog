// have gen contractor author_id column in scope table

// save req.session.user_id to scope author_id column when then pass a new scope

// tell someone who views the 

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },

        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
               model: 'user',
               key: 'id' 
            }
        },

        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;

