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

// Endpoint do pobierania unikalnych wartości pola "subject"
server.get("/subjects", (req, res) => {
  const db = router.db.get("advices"); // Pobiera wszystkie dane z tabeli advices
  const subjects = db.map((advice) => advice.subject); // Wyciąga pole subject
  const uniqueSubjects = [...new Set(subjects)]; // Usuwa duplikaty
  res.json(uniqueSubjects); // Zwraca listę unikalnych wartości
});

// Endpoint do pobierania tagów
server.get("/tags", (req, res) => {
  const db = router.db.get("advices");
  const allTags = db.flatMap((advice) => advice.tags);
  const uniqueTags = [...new Set(allTags)];
  res.json(uniqueTags);
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});
