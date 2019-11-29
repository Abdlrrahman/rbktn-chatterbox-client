var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
  	this.$select.append(Rooms.render);
  }

};
