import http, { IncomingMessage, ServerResponse } from "http"
import fs from "fs"
import os from "os"

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const word = "Favour an intern at kode 10x";
    const newWord = os.freemem() / 1024 / 1024;

    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write(` ${word}`);
      res.end();

      fs.appendFile(
        "word.txt",
        word + "\n",
        "utf8",
        (err: NodeJS.ErrnoException | null) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-type", "text/plain");
            res.write(`Error Saving Text: ${err.code} - ${err.message}`);
            res.end();
          }
        }
      );

      // Example usage of fs.rename (renames word to newWord)
      fs.rename("./word", "./newWord", (err: NodeJS.ErrnoException | null) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error Renaming File: ${err.code} - ${err.message}`);
          res.end();
        }
      });
    } else if (req.url === "/append" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write(`${newWord}`);
      res.end();
    } 
});



server.listen(3500, () => {
    console.log("http://localhost:3500/");
})