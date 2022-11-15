const {Router} = require('express');
const {
    getPersona,
    crearPersona,
    actualizarPesona,
    deletePersona,
    obtenerPersonaPorId
} = require("../controllers/ctrl-persona");
const {check} = require('express-validator')
const {validarCampos} = require("../middlewares/field-validator");
const routerPersona = Router();

/**
 *  Ruta persona: /api/persona
 */


/**
 * obtiene persona
 */
routerPersona.get('/', getPersona);

/**
 * Obtiene la persona enviando por el parametro el id de la persona
 */
routerPersona.get('/busquedaId/:id', obtenerPersonaPorId);

/**
 * Registra persona
 */
routerPersona.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ]
    , crearPersona);

/**
 * Actualiza persona
 */
routerPersona.put('/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ]
    , actualizarPesona);


routerPersona.delete('/:id'
    , deletePersona);

module.exports = routerPersona;