import app from "./app.js";

app.listen(app.get("port"), () => console.log(`servidor corriendo en el puerto', ${app.get("port")}...\nlocalhost:${app.get("port")}`));