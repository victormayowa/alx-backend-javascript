class AppController {
  static getHomepage(req, resp, next) {
    req.greeting = 'Hello Holberton School!';
    next();
  }
}

export default AppController;
