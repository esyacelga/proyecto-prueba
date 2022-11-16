const request = require('supertest')
const app = require('../index')
const personaDb = require('../models/persona')
const Persona = require("../models/persona");



describe("Crea una persona", function () {
    it("Espera que exista la persona creada", async function () {
        const personaNueva = {
            nombre: 'Martha01',
            apellido: 'Simba02',
            edad: '37',
            telefono: '022873122',
            email: 'martha05@yacelga.com'
        }

        const persona = new personaDb(personaNueva);
        await persona.save();
        expect(persona).not.toBeUndefined()
    },10000);
});

describe("Actualiza la persona", function () {
    it("Espera que se haya modificado la persona desde la base de datos", async function () {
        const uidPesona = '637413de990568b8ff2bd0a3'
        const personaNueva = {
            nombre: '***',
            apellido: 'Simba02',
            edad: '37',
            telefono: '022873122',
            email: 'martha05@yacelga.com'
        }
        const personaActualizado = await personaDb.findByIdAndUpdate(uidPesona, personaNueva, {new: true});
        expect(personaActualizado).not.toBeUndefined()
    },10000);
});



/*
describe("Elimina la persona", function () {
    it("Espera que se haya modificado la persona desde la base de datos", async function () {
        const uidPesona = '63751a09f36363041275ecae'
        await personaDb.findByIdAndDelete(uidPesona);
        const personaEliminada = await personaDb.findById(uidPesona);
        expect(personaEliminada).toBeNull()
    },10000);
});
*/
