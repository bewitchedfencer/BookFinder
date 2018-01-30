//get route to get to the survey.html page

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "../public/home.html"))
  });