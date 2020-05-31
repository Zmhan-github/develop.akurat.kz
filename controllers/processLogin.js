module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if (password === "Asd123445") {
    res.cookie('username', username);
    res.redirect('welcome')
  } else {
    res.redirect('/login?msg=fail');
  }
};