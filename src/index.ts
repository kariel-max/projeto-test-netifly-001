import { server } from "./Server/server";

server.listen(process.env.PORT, ()=> {
    console.log(`server conectado com sucesso na PORT: ${process.env.PORT}`); 
})
