import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.resolve("db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware do niestandardowego filtrowania
server.use((req, res, next) => {
  if (req.method === "GET" && req.query.subject_like) {
    const subject = req.query.subject_like.toLowerCase();
    const db = router.db.get("advices");

    const filtered = db.filter((advice) =>
      advice.subject.toLowerCase().includes(subject)
    );

    res.json(filtered);
  } else {
    next();
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});
