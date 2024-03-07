
;(function ( $, window, document, undefined ) {

    var pluginName = 'minigrid',
        _search = '.waxed-minigrid',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
          container: '.cards',
          item: '.card',
          gutter: 16
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };

      },


      this.free = function() {

      },

      this.init=function() {
        if (typeof that.dd.gutter != 'undefined') {
          that.cfg.gutter = parseInt(that.dd.gutter);
        };

        this.grid = new Minigrid(that.cfg);
        this.grid.mount();


        let timer;
        function debounce(func, timeout = 300){
          return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
          };
        }

        function reRender(){
          $(that.element).find('div.card').each(function(i,a){
            $(a).css({'position':'static','transform':'none'});
          });
          $(that.element).css({'width':'100%','height':'auto','position':'static'});
          that.grid.mount();
        }

        const resizeObserver = new ResizeObserver((entries) => {
          debounce(() => reRender(), 100)();
        });
        resizeObserver.observe(document.body);

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
