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
};

export default employeeRoute;
