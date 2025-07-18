const baseURL = 'http://localhost:3000/api';
const fetch = require('node-fetch');

//Devuelve datos de que el usuario existe
describe('GET /users/:id', () => {
  it('should return user data when user exists', async () => {
    const response = await fetch(`${baseURL}/users/123`);
    expect(response.status).toBe(200); //Que el HTTP status sea 200 OK
    const user = await response.json();
    expect(user).toHaveProperty('id', '123'); //ID Dummy, el JSON tiene una propiedad id 123
  });
//ID inexistente 404 Not Found
  it('should return 404 when user does not exist', async () => {
    const response = await fetch(`${baseURL}/users/nonexistent-id`);
    expect(response.status).toBe(404);
  });
});

describe('DELETE /users/:id', () => {
  it('should perform a soft delete (mark user as deleted)', async () => {
    const userId = '123'; // Dummy ID
    const deleteResponse = await fetch(`${baseURL}/users/${userId}`, {
      method: 'DELETE',
    });
    expect(deleteResponse.status).toBe(200);

    const getResponse = await fetch(`${baseURL}/users/${userId}`);
    expect(getResponse.status).toBe(200);

    const user = await getResponse.json();
    expect(user).toHaveProperty('deleted', true); // Para la API
  });
});

describe('POST /users', () => {
  it('should create a user when data is valid', async () => {
    const newUser = {
      nombre: 'María Pérez',
      email: 'maria.perez@example.com',
      rfc: 'PEPM8001015A0'
    };

    const response = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    expect(response.status).toBe(201);

    const user = await response.json();
    expect(user).toHaveProperty('id');
    expect(user.nombre).toBe(newUser.nombre);
    expect(user.email).toBe(newUser.email);
    expect(user.rfc).toBe(newUser.rfc);
  });

  it('should fail if email is invalid', async () => {
    const invalidUser = {
      nombre: 'Pedro Gómez',
      email: 'not-an-email',
      rfc: 'GOMP8001015A0'
    };

    const response = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidUser)
    });

    expect(response.status).toBe(400);
  });

  it('should fail if RFC is invalid', async () => {
    const invalidUser = {
      nombre: 'Ana Ruiz',
      email: 'ana.ruiz@example.com',
      rfc: '123ABC'
    };

    const response = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidUser)
    });

    expect(response.status).toBe(400);
  });

  it('should fail if nombre is missing', async () => {
    const invalidUser = {
      email: 'juan@example.com',
      rfc: 'JUAN8001015A0'
    };

    const response = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidUser)
    });

    expect(response.status).toBe(400);
  });
});