const healthRoute = ({ app }) => {
  app.get("/", async (req, res) => {
    return res.status(200).send("POULET");
  });
};

export default healthRoute;
