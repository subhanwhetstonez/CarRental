const authService = require("../services/authService");

class AuthController {
  showRegisterPage(req, res) {
    res.render("auth/register");
  }

  showLoginPage(req, res) {
    res.render("auth/login");
  }

  async register(req, res) {
    try {
      const { username, password } = req.body;
      await authService.register(username, password);
      res.redirect("/api/auth/login");
    } catch (error) {
      res.status(400).render("auth/register", { error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await authService.login(username, password);
      res.cookie("token", token, { httpOnly: true });
      res.redirect("/api/cars");
    } catch (error) {
      res.status(400).render("auth/login", { error: error.message });
    }
  }
}

module.exports = new AuthController();
