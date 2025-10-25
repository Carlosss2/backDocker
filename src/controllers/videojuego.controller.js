import * as VideojuegoService from "../services/videojuego.service.js";

export const getAll = async (req, res) => {
  try {
    const data = await VideojuegoService.obtenerTodos();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await VideojuegoService.obtenerPorId(req.params.id);
    if (!data) return res.status(404).json({ message: "No encontrado" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevo = await VideojuegoService.crear(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const actualizado = await VideojuegoService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const mensaje = await VideojuegoService.eliminar(req.params.id);
    res.json(mensaje);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
