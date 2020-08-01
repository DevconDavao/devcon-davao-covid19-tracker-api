/**
 * TODO: This is a dummy content for DEMO purpose only. Please remove if not needed.
 */
/**
 * Search user using request.
 *
 * @param {Object}
 */
const User = require('../../../../models/user');

async function userProfile(req, res) {
    const { db } = this.mongo;

    try {
        const profile = await db.collection('User').findOne({ username: req.params.username });
        res.send(profile);
    } catch (err) {
        console.log(err);
    }
}

// async function userList(req, res) {
//     const { db } = this.mongo;

//     try {
//         const users = await db.collection('User').find();
//         res.send(users);
//     } catch (err) {
//         res.send(err);
//     }
// }

async function createUser(req, res) {
    const { db } = this.mongo;

    const post = new User({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        assigned_area: req.body.assigned_area
    });

    try {
        const savedPost = await db.collection('User').save(post);
        res.send(savedPost);
    } catch (err) {
        res.send({ message: err });
    }
}

module.exports = {
    createUser,
    userProfile,
    // userList
};