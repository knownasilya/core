import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /projects > creates a project', async (t) => {
  let result = await t.context.app.post('/projects', {
      // Add the project payload here
    title: 'hello'
  });

  t.is(result.status, 201);
  t.is(result.body.title, 'hello');
});

test('GET /projects > should list projects', async (t) => {
  let result = await t.context.app.get('/projects');

  t.is(result.status, 200);
  t.is(result.body.foo, 'bar');
});

test('GET /projects/:id > should show a project', async (t) => {
  let { body } = await t.context.app.post('/projects', {
      // Add the project payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/projects/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /projects/:id > should update a project', async (t) => {
  let { body } = await t.context.app.post('/projects', {
      // Add the project payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/projects/${ id }`, {
      // Add the project payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /projects/:id > should delete a project', async (t) => {
  let { body } = await t.context.app.post('/projects', {
      // Add the project payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/projects/${ id }`);

  t.is(result.status, 204);
});
