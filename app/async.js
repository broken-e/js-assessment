exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      return $.Deferred(function (def) {
          def.resolve(value);
      });
  },

  manipulateRemoteData: function (url) {
      return $.Deferred(function (def) {
          $.ajax({
              url: url,
              success: function (data) {
                  def.resolve(data.people.map(function (item) {
                      return item['name'];
                  }).sort());
              }
          })
      });
  }
};
