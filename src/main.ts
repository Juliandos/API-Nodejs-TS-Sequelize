import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { sequelize } from "./db/database";
import { initModels } from "./models/init-models";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

initModels(sequelize);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
