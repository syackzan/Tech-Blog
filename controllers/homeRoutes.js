const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Get Route to print every blog//
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    

    const blogs = blogData.map(element => element.get({ plain: true}));
    
    //res.json(users);
    
    res.render('homepage',
      {
        blogs,
        logged_in: req.session.logged_in,
      }
    );
      
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route for a specific Blog//
router.get('/blog/:id', async (req, res) => {
  try {
    const userData = await Blog.findByPk(req.params.id, {
      include: {model: Comment}
    })

    const users = userData.get({ plain: true});

    res.json(users);
    
    // res.render('homepage'
    //   {
    //     users,
    //   logged_in: req.session.logged_in,
    //   }
    // );
  } catch (err) {
    res.status(500).json(err);
  }
});

//Gets Users and All Blogs & Comments By User//
router.get('/userBlog', async (req, res) => {
  try {
    const userData = await User.findAll({include: [{model: Blog}, {model: Comment}]});

    const users = userData.map(element => element.get({ plain: true}));

    res.json(users);
    
    // res.render('homepage'
    //   {
    //     users,
    //   logged_in: req.session.logged_in,
    //   }
    // );
  } catch (err) {
    res.status(500).json(err);
  }
});

//Directs You to Login Page//
router.get('/login', (req, res) => {
  
  res.render('login');
  
});

router.get('/loginchoice', (req, res) => {

  res.render('loginchoice');
})

router.get('/signup', (req, res) => {

  res.render('signup');
});

// router.get('/gcsignup', (req, res) => {
//   // if (req.session.logged_in) {
//   //   res.redirect('/');
//   //   return;
//   // }

//   res.render('gcsignup');
// });


module.exports = router;
