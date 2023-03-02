import fastify from "fastify";

const app = fastify();

app.get('/', (request, reply) => {
  return reply.send("Hello World!");
})

app.listen({
  port: 3333
}).then(() => {
  console.log("Server is running in port 3333... 🚀")
})