module.exports = function (req, res, next) {
    // Этот middleware должен работать ПОСЛЕ обычного auth middleware
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Доступ запрещен. Требуются права администратора.' });
    }
    // Если isAdmin: true, пускаем дальше
    next();
};