/**
* This script handles terminal io
*/

var IDE = IDE || {};
IDE.htwg = IDE.htwg || {};

IDE.htwg.Terminal = function($){

  var responses = ""

  this.init = function ( options ) {
    $("#terminal-input").keypress(this.handleKey);
    $("#terminal-input").keydown(this.handleKeyDown);
  };

  this.handleKey = function(e) {
    var msg = {
      "type": "terminal",
      "command": "keyEvent",
      "value": e.keyCode
    };
    IDE.htwg.websocket.sendMessage(msg);
  };

  this.handleKeyDown = function(e) {
    var key = e.keyCode;
    if (key == 8 || key == 9) {  // Backspace || Tabulator
      var msg = {
        "type": "terminal",
        "command": "keyEvent",
        "value": key
      };
      IDE.htwg.websocket.sendMessage(msg);
    };
  };

  this.executeCommand = function(data){
    switch ( data.command ){
      case "response":
        responses = responses + data.value + '\n'
        $("#terminal-input").val(responses)
        break;
      default:break;
    }
  };

  this.init();
};
