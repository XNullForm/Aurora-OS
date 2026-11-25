export default { async fetch(request, env) {
const url = new URL(request.url);
if (url.pathname === "/api/status") return Response.json({status:"online", browserConfigured:false}, {headers:{"Cache-Control":"no-store"}});
if (url.pathname.startsWith("/api/")) return new Response("Not found",{status:404});
return env.ASSETS.fetch(request);
} };