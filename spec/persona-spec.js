const request = require('supertest')
const app = require('../index')


describe("Status 200", function () {
    it("Espera que el endpoint raiz este activo", async function () {
        const response = await request('localhost:' + process.env.PORT).get('/');
        expect(response.status).toBe(200);
    });
});

describe("Get personas", function () {
    it("Espera que la lista no este vacia", async function () {
        const response = await request('localhost:' + process.env.PORT).get('/api/persona');
        const json = JSON.parse(response.text)
        const objetoLista = json.personas;
        //console.log(objetoLista);
        const tamanioLista = objetoLista.length;
        expect(tamanioLista).toBeGreaterThan(0);
    }, 10000);
});

describe("Obtener persona por ID", function () {
    it("Espera que exista le persona enviada por parametro", async function () {
        const response = await request('localhost:' + process.env.PORT).get('/api/persona/busquedaId/63750356181038ec20fdb813');
        const json = JSON.parse(response.text)
        expect(json.personaDb).not.toBeUndefined()
    }, 10000);
});

describe("Crea una persona", function () {
    it("Espera que la persona se haya creado, tomando como validacion estatus del sevicio", async function () {
        const personaNueva = {
            nombre: 'Martha',
            apellido: 'Simba',
            edad: '37',
            telefono: '022873122',
            email: 'martha05@yacelga.com'
        }
        const response = await request('localhost:' + process.env.PORT).post('/api/persona').send(personaNueva);
        expect(response.status).toBe(200);
    }, 10000);
});

describe("Actualiza una persona", function () {
    it("Espera que la persona se haya actualizado, tomando como validacion estatus del sevicio", async function () {
        const personaNueva = {
            nombre: 'Martha',
            apellido: 'Simba',
            edad: '37',
            telefono: '022873122',
            email: 'marth0211@yacelga.com'
        }
        const response = await request('localhost:' + process.env.PORT).put('/api/persona/637413de990568b8ff2bd0a3').send(personaNueva);
        expect(response.status).toBe(200);
    }, 10000);
});




