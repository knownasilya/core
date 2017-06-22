export default function drawRoutes(router) {
  router.get('/', 'index');

  router.resource('project');
}
