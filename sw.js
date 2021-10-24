importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
)

const ALLOWED_HOSTS = [
  location.host,
  'unpkg.com',
  'cdn.jsdelivr.net'
]

const matchCb = ({ url, event }) => {
  return event.request.method === 'GET' && ALLOWED_HOSTS.includes(url.host)
}

workbox.routing.registerRoute(
  matchCb,
  workbox.strategies.networkFirst()
)