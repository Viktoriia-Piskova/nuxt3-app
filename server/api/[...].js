export default fromNodeMiddleware(req => $fetch(` https://api.coinlore.net${req.url}`))
