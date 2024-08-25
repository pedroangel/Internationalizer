const Text = require("../models/Text");

// Crear un nuevo texto
exports.createText = async (req, res) => {
  try {
    const text = new Text(req.body);
    await text.save();
    res.status(201).send(text);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtener todos los textos
exports.getAllTexts = async (req, res) => {
  try {
    const texts = await Text.find({});
    res.status(200).send(texts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtener un texto por clave
exports.getTextByKey = async (req, res) => {
  try {
    const text = await Text.findOne({ key: req.params.key });
    if (!text) {
      return res.status(404).send();
    }
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtener todo el texto de una pagina
exports.getTextByPage = async (req, res) => {
  try {
    const text = await Text.find({ page: req.params.page });
    if (!text) {
      return res.status(404).send();
    }
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Actualizar un texto
exports.updateText = async (req, res) => {
  try {
    const text = await Text.findOneAndUpdate(
      { key: req.params.key },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!text) {
      return res.status(404).send();
    }
    res.status(200).send(text);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Eliminar un texto
exports.deleteText = async (req, res) => {
  try {
    const text = await Text.findOneAndDelete({ key: req.params.key });
    if (!text) {
      return res.status(404).send();
    }
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send(error);
  }
};
