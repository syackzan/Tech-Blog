const router = require('express').Router();
const { Blog } = require('../../models')


//Post Route for Blog to Create a new Blog Post// edits required below
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
  router.put('/u/:id', async (req, res) => {
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

  // DELETE route to destroy a blog Post // complete
  router.delete('/:id', async (req, res) => {
    try {
      const blog = await Blog.destroy(
        {
        where: {
          id: req.params.id
        },
      });
      
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json(err)
    };
  });

  module.exports = router;
