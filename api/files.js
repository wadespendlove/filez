import express from "express";
import { getFiles } from "#queries/files.js";
import { getFolder, createFile } from "#queries/folders.js";

const router = express.Router();

router.get("/files", async (req, res) => {
  try {
    const files = await getFiles();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

router.post("/folders/:id/files", async (req, res) => {
  const { id } = req.params;
  const { name, size } = req.body;

  try {
    const folder = await getFolder(id);
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }

    if (!name || !size) {
      return res
        .status(400)
        .json({ error: "Missing name or size in request body" });
    }

    const file = await createFile(name, size, id);
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ error: "Failed to create file" });
  }
});

export default router;
