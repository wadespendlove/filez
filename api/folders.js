import express from "express";
import { getFolders, getFolder } from "#queries/folders";
const router = express.Router();

router.get("/folders", async (req, res) => {
  res.send(await getFolders());
});

router.get("/folders/:id", async (req, res) => {
  const { id } = req.params;
  const folder = await getFolder(id);

  if (!folder) {
    return res.status(404).json({ error: "Folder not found" });
  }

  res.send(folder);
});

export default router;
