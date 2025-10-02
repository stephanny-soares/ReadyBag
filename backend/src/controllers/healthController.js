export const health = (req, res) => {
  res.json({
    status: "ok",
    mensaje: "Servidor funcionando correctamente",
    hora: new Date().toISOString()
  });
};
