// require the models
var db = require("../models");
// require our custom middleware for determining if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function (app) {
  // the route for the index page with the buttons for the sign-up and log-in routes
  app.get("/", (req, res) => {
    res.render("main");
  });
  // the route for the log-in page
  app.get("/login", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/login");
    }
    res.render("login");
  });
  // the route for the sign-up page
  app.get("/signup", (req, res) => {
    // if the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/medlist");
    }
    res.render("signup");
  });
  // the route for the members page
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/medList", (req, res) => {
  //   res.render("medlist");
  // });
  // the route for the list of events page
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/medlist", (req, res) => {
    db.Events.findAll({}).then(dbMeds => {
      res.render("medlist", { events: dbMeds });
    });
  });
  // the route for creating an event
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/create", (req, res) => {
    res.render("create");
  });
  // the route for the created event
  // this route is authenticated by our authentication middleware
  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/medlist/:id", (req, res) => {
  //   db.dbMeds.findOne({ where: { id: req.params.id } }).then(dbMed => {
  //     console.log(Meddb.dataValues);
  //     res.render("meds", {
  //       event: {
  //         name: dbmed.dataValues.name,
  //         description: dbEvent.dataValues.description,
  //         date: dbEvent.dataValues.date,
  //         location: dbEvent.dataValues.location,
  //         items: dbEvent.dataValues.items.split(",")

  app.get("/meds/:id", (req, res) => {
    db.meds.findOne({ where: { id: req.params.id } }).then(dbmeds => {
      console.log(dbmed.dataValues);
      res.render("meds", {
        event: {
          name: dbmeds.dataValues.name,
          description: dbEvent.dataValues.description,
          date: dbmeds.dataValues.date,
          location: dbmeds.dataValues.location,
          items: dbmeds.dataValues.items.split(",")
        }
      });
    });
  });
};
