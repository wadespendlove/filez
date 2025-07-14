import db from "#db/client";
import { createFolder, getFolders, getFolder } from "#queries/folders";
import { createFile } from "#queries/files";

const seed = async () => {
  // TODO
  console.log("Creating folder...");
  await createFolder("Folder 1");
  console.log("Folder created.");

  console.log("Creating files...");
  await createFile("File 1", 125, 1);
  await createFile("File 2", 125, 1);
  await createFile("File 3", 125, 1);
  await createFile("File 4", 125, 1);
  await createFile("File 5", 125, 1);
  console.log("Files created.");

  console.log("Creating folder...");
  await createFolder("Folder 2");
  console.log("Folder created.");

  console.log("Creating files...");
  await createFile("File 1", 125, 2);
  await createFile("File 2", 125, 2);
  await createFile("File 3", 125, 2);
  await createFile("File 4", 125, 2);
  await createFile("File 5", 125, 2);
  console.log("Files created.");

  console.log("Creating folder...");
  await createFolder("Folder 3");
  console.log("Folder created.");

  console.log("Creating files...");
  await createFile("File 1", 125, 3);
  await createFile("File 2", 125, 3);
  await createFile("File 3", 125, 3);
  await createFile("File 4", 125, 3);
  await createFile("File 5", 125, 3);
  console.log("Files created.");
};

console.log("Connecting to Database...");
await db.connect();
await seed();
console.log("🌱 Database seeded.");

console.log("Getting folders...");
await getFolders();
await db.end();
