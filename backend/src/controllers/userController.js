const User = require('../models/user');

module.exports = {
    async UserInsert(req, res){
        try{
            const user = await User.create(req.body);
            return res.send({ user }); 
        }catch(err){
            return res.status(400).send({ error: 'Error creating new user' + err});
        }
    },
    async UserQueryAll(req, res){
        try{
            const users = await User.find()
            return res.send({ users});
    
        }catch(err){
            return res.status(400).send({ error: 'Error loading users '+ err});
        } 
    },
    async UserEdit(req, res){
        try{
            const {email, name, password} = req.body;
            const userId = req.params.userId
            const user = User.findByIdAndUpdate(userId, {
                email,
                password,
                name
            }, {new: true});
            return res.send({ user });
        }catch(err){
            return res.status(400).send({error: 'Error editing user' + err});
        }
    },
    async UserDelete(req, res){
        try{
            const userId = req.params.userId;
            await User.findByIdAndDelete(userId);
            return res.send();

        }catch(err){
            return res.status(400).send({ error: 'Error deleting user '+err});
        }
    }
};