// Metodo generico para retornar todos los documentos de una coleccion
exports.darTodos = function (req, res, model) {
    model.find(function (err, docs) {
        if (err) {
            res.status(500).send('Ocurrio un error obteniendo los datos: ' + err);
        }
        else
            res.status(200).send(docs);
    });
};

// Metodo generico para obtener un modelo con un id especifico
exports.darDocumento = function (req, res, model) {
    model.findById(req.params.id, function (err, doc) {
        if (err) {
            res.status(500).send('Ocurrio un error obteniendo el documento: ' + err);
        }
        else if (!doc) {
            res.status(500).send('No se encontro el documento');
        }
        else
            res.status(200).send(doc);
    });
}

// Metodo para actualizar un documento dado su id
exports.actualizarDocumento = function (req, res, model) {
    if (req.params.id) {
        model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, doc) {
            if (err) {
                res.status(500).send('No se pudo actualizar el documento: ' + err);
            }
            else if (!doc) {
                res.status(500).send('No se encontro el documento');
            }
            else {
                res.status(200).send(doc);
            }
        });
    }
    else {
        res.status(500).send('Id invalido');
    }

}

// Metodo generico para insertar un documento en una coleccion, si por alguna razon el body contiene un id, se intentara actualizar el documento
exports.actualizarInsertar = function (req, res, nuevoModelo) {
    nuevoModelo.save(function (err, doc, numAffected) {
        if (err) {
            res.status(500).send('No se pudo insertar el documento: ' + err);
        }
        else {
            res.status(200).send(doc);
        }
    });


};

// Metodo para eliminar un documento dado su id
exports.eliminarDocumento = function (req, res, model) {
    model.remove({ _id: req.params.id }, function (err, doc) {
        if (err) {
            res.status(500).send('Ocurrio un error eliminando el documento: ' + err);
        }
        else if (!doc) {
            res.status(500).send('No se encontro el documento');
        }
        else
            res.status(200).send(doc);
    });
}
