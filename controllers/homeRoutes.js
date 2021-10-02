const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const { findByPk } = require('../models/User');
const withAuth = require('../utils/auth');

//Get Route to print every blog//
router.get('/', async (req, res) => {
  try {

    const blogData = await Blog.findAll({
      include: [{model: User}],
    });
    
    const blogs = blogData.map(element => element.get({ plain: true}));
    
    //res.json(blogs);
    
    res.render('homepage',
      {
        blogs,
        user_id: req.session.user_id,
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

    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }

    const blogData = await Blog.findByPk(req.params.id, {
      include: [{
        model: Comment, 
        include: [{model: User}]  
      }, {model: User}]    
    });

    const blog = blogData.get({ plain: true});

    

    // res.json(blog);
    
    res.render('oneblog',
      {
      blog,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER + Display their Blog Posts & all blog posts they comment ont
router.get('/dashboard/:id', async (req, res) => {
  try {

    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }

    const userData = await User.findByPk(req.params.id, {
      include: [{model: Blog}, {
        model: Comment, 
        include: [{model: Blog,
          include: {model: User}
        }]  
      }]    
    });

    const user = userData.get({ plain: true});

    

    // res.json(user);
    
    res.render('dashboard',
      {
      user,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
}); 

router.get('/blog/edit/:id', async (req, res) => {
  try{

    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }

    const blogData = await Blog.findByPk(req.params.id, {
      include: {model: User}
    });
   
    const blog = blogData.get({ plain: true});

    //res.json(blog);

    res.render('edit', {
      blog,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in
    })

  } catch (err) {
    res.status(500).json(err);
  }
})

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

router.get('/gcsignup', (req, res) => {
  

  res.render('gcsignup');
});


module.exports = router;
