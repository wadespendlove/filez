import db from "#db/client";

export const createFolder = async (name) => {
  const sql = `
  INSERT INTO folders (name)
  VALUES ($1)
  RETURNING *;
  `;

  const {
    rows: [createdFolder],
  } = await db.query(sql, [name]);
  return createdFolder;
};

export const getFolders = async () => {
  const sql = "SELECT * FROM folders;";

  const { rows: allFolders } = await db.query(sql);
  console.log(allFolders);
  return allFolders;
};

export const getFolder = async (id) => {
  const sql = `
  SELECT 
    folders.id,
    folders.name,
    json_agg(
      json_build_object('id', files.id, 'name', files.name, 'size', files.size)
    ) AS files
  FROM folders
  LEFT JOIN files ON folders.id = files.folder_id
  WHERE folders.id = $1
  GROUP BY folders.id;
  `;

  const { rows: selectedFolder } = await db.query(sql, [id]);
  console.log(selectedFolder);
  return selectedFolder[0];
};
