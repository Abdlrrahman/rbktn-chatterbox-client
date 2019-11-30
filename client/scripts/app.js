var App = {

  $spinner: $('.spinner img'),
  $chat: $('#chats'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // we tried to check for the name of the rooms in order to not dublicate themand appened to select elements
      var obj = {};
      for(var i = 0; i < data["results"].length; i++){
      	if(obj[data["results"][i].roomname] === undefined){
      		obj[data["results"][i].roomname] = true;
      		$('select').append('<option value="'+data["results"][i].roomname+'">' + data["results"][i].roomname + '</option>')
      	}
      	$('option').click()
      	// console.log($('option').attr('value'));
      	// $('select').append('<option value="none">' + data["results"][i].roomname + '</option>');
      	// $('#chats').prepend('<h1>' + data["results"][i].username + '</h1>' + '<p>' + data["results"][i].text + '</p>')
      	
      	// we appendeed data to the chat 
      	$('#chats').prepend(MessageView.render({username:data["results"][i].username, text: data["results"][i].text}))


      	// MessageView.render(data["results"][i].username)
      	// $('#chats').prepend('<p>' + data["results"][i].text + '</p>')
      }
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
