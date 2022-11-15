const {Schema, model} = require('mongoose')

const PersonaShema = Schema({
    nombre: {
        type: String,
        require: true
    }, apellido: {
        type: String,
        require: true

    }, edad: {
        type: Number,
        require: true
    }, telefono: {
        type: String
    }, email: {
        type: String,
        require: true
    },
})
PersonaShema.method('toJSON', function () {
    const {_id, __v, ...object} = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Persona', PersonaShema);