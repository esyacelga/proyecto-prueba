const Persona = require('../models/persona')
const {response} = require('express');

const obtenerPersonaPorId = async (req, res) => {
    const uid = req.params.id;
    const validationRegex = new RegExp("^[0-9a-fA-F]{24}$")
    if (validationRegex.test(uid) == false) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe la persona con el id ingresado'
        })
    }
    const personaDb = await Persona.findById(uid);
    if (!personaDb) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe la persona con el id ingresado'
        })
    }
    res.json({
        ok: true,
        personaDb
    })
}

const deletePersona = async (req, res = response) => {
    const uid = req.params.id;
    const validationRegex = new RegExp("^[0-9a-fA-F]{24}$")
    if (validationRegex.test(uid) == false) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe la persona con el id ingresado'
        })
    }

    try {
        const personaDb = await Persona.findById(uid);
        if (!personaDb) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la persona con el id ingresado'
            })
        }
        const personaEliminada = await Persona.findByIdAndDelete(uid);
        res.json({
            ok: true,
            personaEliminada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, revisar los logs'
        });
    }
}

const actualizarPesona = async (req, res = response) => {
    const uid = req.params.id;
    const validationRegex = new RegExp("^[0-9a-fA-F]{24}$")
    if (validationRegex.test(uid) == false) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe la persona con el id ingresado'
        })
    }
    try {

        const personaDb = await Persona.findById(uid);
        if (!personaDb) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe informacion con el criterio de busqueda ingresado'
            })
        }

        const campos = req.body;
        const personaActualizado = await Persona.findByIdAndUpdate(uid, campos, {new: true});

        res.json({
            ok: true,
            personaActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, revisar los logs'
        });
    }
}


const getPersona = async (req, res) => {
    const personas = await Persona.find({}, 'uid nombre apellido edad email telefono');
    res.json({
        ok: true,
        personas
    })
}


const crearPersona = async (req, res = response) => {
    const {nombre, apellido, edad, telefono, email} = req.body;
    try {
        const persona = new Persona(req.body);
 /*       const existeEmail = await Persona.findOne({email});
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado'
            })
        }
*/
        await persona.save();
        res.json({
            ok: true,
            persona
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado.. revisar los logs'
        });
    }


}


module.exports = {getPersona, crearPersona, actualizarPesona, deletePersona, obtenerPersonaPorId}