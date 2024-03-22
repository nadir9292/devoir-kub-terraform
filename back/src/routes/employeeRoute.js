const employeeRoute = ({ app, client }) => {
  app.get("/employees", async (req, res) => {
    res.send([
      {
        id: 1,
        name: "Nadir",
      },
      {
        id: 2,
        name: "Quentin",
      },
    ]);
  });

  app.post("/insert-data", async (req, res) => {
    const {
      body: { id, name },
    } = req;

    try {
      res.status(200).send({ id: id, name: name });
    } catch (err) {
      res.status(401).send(err);
    }
  });
};

export default employeeRoute;
