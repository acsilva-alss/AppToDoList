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
    async UserQuery(req, res){
        try{
            const userId = req.params.userId;
            const user = await User.findById(userId);
            if(!user){
                return req.status(400).res({ error: 'Error, user not exist'});
            }
            return res.send({ user });
        }catch(err){
            return res.status(400).send({error: 'Error querying user '+ err});
        }
    },
    async UserEdit(req, res){
        try{
            const userEdited = req.params;
            const user = User.findByIdAndUpdate(userEdited.userId, {
                email: userEdited.email,
                name: userEdited.name
            }, {new: true});

            return res.send({ user });
        }catch{
            return res.status(400).send({error: 'Error editing user'});
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