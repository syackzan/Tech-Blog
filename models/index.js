const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');



// GeneralContractors.hasMany(Project, {
//     foreignKey: 'general_contractor_id',
//     onDelete: 'CASCADE'
// });

// Project.belongsTo(GeneralContractors, {
//     foreignKey: 'general_contractor_id'
// });




module.exports = { 
    User,
    Comment,
    Blog,
};

