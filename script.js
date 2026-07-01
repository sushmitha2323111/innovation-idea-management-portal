const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify({
            success: true,
            message: "Backend is running successfully!"
        }));
    } else if (req.url === "/api/data" && req.method === "GET") {
        res.end(JSON.stringify({
            name: "Happy Kids Rhymes",
            status: "Active"
        }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            success: false,
            message: "Route Not Found"
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});