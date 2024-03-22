const healthRoute = ({ app }) => {
  app.get("/", async (req, res) => {
    return res.status(200).send("OK");
  });

  app.get("/log", (req, res) => {
    fs.readFile("logfile.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la lecture du fichier de log");
        return;
      }
      res.send(data);
    });
  });
};

export default healthRoute;
