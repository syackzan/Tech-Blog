const router = require('express').Router();
const { Blog } = require('../../models')


//Post Route for Blog to Create a new Blog Post// edits required below
//Need to change req.body.user_id to req.session.id//
//Need to Update Date Created//
router.post('/', async (req, res) => {
    
      // If the user is logged in, allow user to view the scope
      try {
        console.log(req.body);
        const blogData = await Blog.create(
          {
            title: req.body.title,
            contents: req.body.contents,
            date_created: req.body.date_created,
            user_id: req.body.user_id,
          }
        );
        
        res.json(blogData)

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
  });
  
  // PUT route to edit a blog Post // complete
  router.put('/:id', async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params.id);
      const blog = await Blog.update(
        {
          title: req.body.title,
          contents: req.body.contents,
        }, 
        {
        where: {
          id: req.params.id
        },
      });
      if (!blog[0]) {
        res.status(404).json({ message: 'Sorry, you can\'t modify this data.' });
        return;
      } res.status(200).json(blog);
    } catch (err) {
      res.status(500).json(err)
    };
  });

  module.exports = router;

  //SAVIING THIS FOR THE IF STATEMENT TO REROUTE IF NOT LOGGED IN
  // router.post('/blog', async (req, res) => {
  //   // If the user is not logged in, redirect the user to the login page
  //   if (!req.session.loggedIn) {
  //     res.redirect('/login');
  //   } else {
  //     // If the user is logged in, allow user to view the scope
  //     try {
  //       const scopeData = await Scope.findByPk(req.params.id);
  //       const scope = scopeData.get({ plain: true });
  //       res.render('scope', { 
  //         scope, 
  //         isContractor: req.session.isContractor 
  //       });
  //     } catch (err) {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }
  //   }
  // });
