import db from './../models';

const userController = {};

userController.get = (req, res) => {
  db.users.find().then((users) =>{
    res.json(users)
  })
}

export default userController;
