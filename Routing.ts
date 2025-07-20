import http, { IncomingMessage, ServerResponse } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const port = 3000;
const staticDir = path.join(__dirname, "BootCamp");

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
      const htmlFile = path.join(staticDir, "home.html");
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      fs.readFile(htmlFile, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error reading file: ${err.code} - ${err.message}`);
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/learn" && req.method === "GET") {
      const htmlFile = path.join(staticDir, "learn.html");
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      fs.readFile(htmlFile, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error reading file: ${err.code} - ${err.message}`);
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/signin" && req.method === "GET") {
      const htmlFile = path.join(staticDir, "sign-in.html");
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      fs.readFile(htmlFile, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error reading file: ${err.code} - ${err.message}`);
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/signup" && req.method === "GET") {
      const htmlFile = path.join(staticDir, "sign-up.html");
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      fs.readFile(htmlFile, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error reading file: ${err.code} - ${err.message}`);
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/quizzy" && req.method === "GET") {
      const htmlFile = path.join(staticDir, "quizzy.html");
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      fs.readFile(htmlFile, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-type", "text/plain");
          res.write(`Error reading file: ${err.code} - ${err.message}`);
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          res.write(data);
          res.end();
        }
      });
    }
  }
);
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});