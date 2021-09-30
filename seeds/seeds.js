const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const user = require('./User.json');
const blog = require('./Blog.json')
const comment = require('./Comment.json');

//Seeding the Database from Json Files//
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userSeed = await User.bulkCreate(user, {
    individualHooks: true,
    returning: true,
  });

  const blogSeed = await Blog.bulkCreate(blog, {
    individualHooks: true,
    returning: true,
  });

  const commentSeed = await Comment.bulkCreate(comment, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
