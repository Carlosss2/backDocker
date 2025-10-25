import pool from "../config/db.js";

export const getAll = async () => {
  const [rows] = await pool.query("SELECT * FROM videojuegos");
  return rows;
};

export const getById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM videojuegos WHERE id = ?", [id]);
  return rows[0];
};

export const create = async (data) => {
  const { titulo, genero, plataforma, anio } = data;
  const [result] = await pool.query(
    "INSERT INTO videojuegos (titulo, genero, plataforma, anio) VALUES (?, ?, ?, ?)",
    [titulo, genero, plataforma, anio]
  );
  return { id: result.insertId, ...data };
};

export const update = async (id, data) => {
  const { titulo, genero, plataforma, anio } = data;
  await pool.query(
    "UPDATE videojuegos SET titulo = ?, genero = ?, plataforma = ?, anio = ? WHERE id = ?",
    [titulo, genero, plataforma, anio, id]
  );
  return { id, ...data };
};

export const remove = async (id) => {
  await pool.query("DELETE FROM videojuegos WHERE id = ?", [id]);
  return { message: "Videojuego eliminado correctamente" };
};
