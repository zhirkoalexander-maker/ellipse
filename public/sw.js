self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.clients.matchAll({type:'window'}).then(c => c.forEach(client => client.navigate(client.url)));
});
