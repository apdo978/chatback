import { Wshandler } from "./app/ws-handler"
function main (){
    const option = {port:8081}
    const wsHandler = new Wshandler()
    wsHandler.intial(option)
}
main()
