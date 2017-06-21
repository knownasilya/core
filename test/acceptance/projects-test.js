import test from 'ava';
import { appAcceptanceTest } from 'denali';

const toJsonApi = (attributes) => {
  return {
    data: {
      type: 'project',
      attributes
    }
  };
};

appAcceptanceTest(test);

test.before((t) => {
  t.context.app.setHeader('content-type', 'application/vnd.api+json');
});

test('POST /projects > creates a project', async (t) => {
  let app = t.context.app;

  app.setHeader('content-type', 'application/vnd.api+json');

  let { body, status } = await app.post('/projects', toJsonApi({
    title: 'hello'
  }));

  t.is(status, 201);
  t.is(body.data.attributes.title, 'hello');
});

test('GET /projects > should list projects', async (t) => {
  let result = await t.context.app.get('/projects');

  t.is(result.status, 200);
  t.truthy(result.body.data[0].attributes.title);
});

test('GET /projects/:id > should show a project', async (t) => {
  let app = t.context.app;

  app.setHeader('content-type', 'application/vnd.api+json');

  let { body } = await app.post('/projects', toJsonApi({
    title: 'blah'
  }));
  let id = body.data.id;

  let result = await app.get(`/projects/${ id }`);

  t.is(result.status, 200);
  t.is(result.body.data.attributes.title, 'blah');
});

test('PATCH /projects/:id > should update a project', async (t) => {
  let app = t.context.app;

  app.setHeader('content-type', 'application/vnd.api+json');

  let { body } = await app.post('/projects', {
      // Add the project payload here
  });
  let id = body.data.id;

  let result = await app.patch(`/projects/${ id }`, {
      // Add the project payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /projects/:id > should delete a project', async (t) => {
  let app = t.context.app;

  app.setHeader('content-type', 'application/vnd.api+json');

  let { body } = await app.post('/projects', {
      // Add the project payload here
  });
  let id = body.data.id;

  let result = await app.delete(`/projects/${ id }`);

  t.is(result.status, 204);
});
