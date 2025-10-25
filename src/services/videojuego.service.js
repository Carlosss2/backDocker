import * as Videojuego from "../models/videojuego.model.js";


export const obtenerTodos = () => Videojuego.getAll();
export const obtenerPorId = (id) => Videojuego.getById(id);
export const crear = (data) => Videojuego.create(data);
export const actualizar = (id, data) => Videojuego.update(id, data);
export const eliminar = (id) => Videojuego.remove(id);
