const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // Kiểm tra các trường đầu vào
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin!' });
  }

  User.create(name, email, hashedPassword, (err, result) => {
    if (err) {
      return res.status(500).send('Lỗi khi đăng ký người dùng');
    }
    res.status(201).send({ message: 'Đăng ký thành công!' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send('Không tìm thấy người dùng');
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send('Mật khẩu không hợp lệ');
    }

    const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken: token
    });
  });
};
