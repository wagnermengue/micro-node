export default {
  "name": "esv7",
  "connector": "esv6",
  "index": "catalog",
  "apiVersion": "7",
  "defaultSize": "",
  "configuration": {
    "node": process.env.ELASTIC_SEARCH_HOST,
    "requestTimeout": process.env.ELASTIC_SEARCH_REQUEST_TIMEOUT,
    "pingTimeout": process.env.ELASTIC_SEARCH_PING_TIMEOUT,
  }
}
