var MessagesView = {
  $username: $('.username'),
  $chats: $('#chats'),
  $message: $('#message'),

  initialize: function() {
  	//MessagesView.$chats.on('submit', MessagesView.render)
  },

  renderMessage: function() {
      
      this.$chats.prepend(MessageView.render({username: window.location.search.slice(10), text: this.$message.val()})); 
      Parse.create(MessagesView.renderMessage($message))
        

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
