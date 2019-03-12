import { version } from "../../package.json";
import { Router } from "express";
import facets from "./facets";

import { loginApi } from "./controllers/admin.controller";

export default ({ config, db }) => {
  let api = Router();

  // mount the facets resource
  api.use("/facets", facets({ config, db }));

  // perhaps expose some API metadata at the root
  api.get("/", (req, res) => {
    console.log("Can you see this one?");
    res.json(version);
  });

  api.get("/another", (req, res) => {
    console.log("Can you see this one?");
    res.json({ data: "new" });
  });

  api.get("/login", loginApi);
  return api;
};
