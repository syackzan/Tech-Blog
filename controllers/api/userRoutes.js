const router = require('express').Router();
const { User } = require('../../models')

//Create New User//
router.post('/add', async (req, res) => {
    try {
        console.log(req.body);
        let userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
  
            req.session.user_id = userData.id
            req.session.logged_in = true;
            res.status(200).json({ message: 'You are now logged in!' });
            
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



//user login
router.post('/login', async (req, res) => {
    try {
        
        console.log(req.body);
        const userData = await User.findOne({ where: {username: req.body.username}});
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        
        const userPassword = await userData.checkPassword(req.body.password);
        console.log(userPassword);
  
        if (!userPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
  
        req.session.save(() => {
  
            req.session.user_id = userData.id
            req.session.logged_in = true;
            res.status(200).json({ message: 'You are now logged in!' });
            
        });

    } catch (err) {
        res.status(400).json(err);
    }
  });


//user logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;