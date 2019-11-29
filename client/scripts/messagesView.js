var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message'),

  initialize: function() {
  	//MessagesView.$chats.on('submit', MessagesView.render)
  },

  renderMessage: function() {
    console.log(message)
      this.$chats.append(MessageView.render({username: message.username, val: message.text})); 	
  }

};

/*
var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};

*/
// FormView.$form.on('submit', FormView.handleSubmit);
