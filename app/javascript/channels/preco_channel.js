import consumer from "./consumer"

consumer.subscriptions.create("PrecoChannel", {
  connected() {
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("data recebida")
    try{
    document.getElementById('tbl_preco').innerHTML = data.content.preco
    }catch(e){
      console.log(e)
    }
    
  }
});
