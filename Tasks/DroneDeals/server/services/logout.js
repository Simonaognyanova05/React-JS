function logout(req, res) {
    try {
        res.status(200).json({ message: 'Successfully logged out' });
    } catch (error) {
        res.status(500).json({ message: 'Logout failed', error });
    }
};

module.exports = { logout };