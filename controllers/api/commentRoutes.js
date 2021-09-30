const router = require('express').Router();
const { Comment } = require('../../models')

//POST to create a new comment all //
//Need to update user_id to req.session.id
//Need to update date_create to actual date create//
//Need to update blog_id to req.params.id
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(
      {
        comment: req.body.comment,
        date_created: req.body.date_created,
        user_id: req.body.user_id,
        blog_id: req.body.blog_id
      }
    )

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT Route to update Comment // complete
router.put ('/:id', async (req, res) => {
  try {
    const dbprojectData = await Comment.update(req.body,
      {
        where: {id: req.params.id},
      }
    )

    res.status(200).json(dbprojectData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;