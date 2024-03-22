const healthRoute = ({ app }) => {
  app.get("/", async (req, res) => {
    return res.status(200).send("POULET : " + new Date());
  });
};

export default healthRoute;
