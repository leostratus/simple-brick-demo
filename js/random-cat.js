(function() {
  xtag.register('random-cat', {
    lifecycle: {
        created: function() {
            this.innerHTML = "<img src='http:\/\/lorempixel.com/300/300/cats'>";
        }
    },
    events: {
        'click': function(e) {
            this.innerHTML = "<img src='#'>";
            this.innerHTML = "<img src='http:\/\/lorempixel.com/300/300/cats/#" + new Date().getTime() + "'>";
        }
    }
  });
})();