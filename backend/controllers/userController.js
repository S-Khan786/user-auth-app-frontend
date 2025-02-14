const User = require('../models/User');

// Search user by username or email
exports.searchUser = async (req, res) => {
    const { query } = req.params;

    try {
        const user = await User.findOne({
            $or: [{ username: query }, { email: query }],
        }).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};