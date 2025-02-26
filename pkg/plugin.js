
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
      this.width = 0;
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
        var changed = false;
        if (typeof rec.config == 'object') {
          var data = rec.config;
          if (typeof data.gutter == 'number') {
            this.cfg.gutter = data.gutter;
            changed = true;
          }          
          if (typeof data.empty == 'boolean') {
            $(that.element).empty();
            changed = true;
          }   
        };
        if (typeof rec.value == 'object') {
          //console.log(rec.value);
          for (var i=0;i<rec.value.length;i++) {
            var a = $('<div></div>').appendTo(that.element);
            a.addClass('card');
            var data = rec.value[i];
            if (typeof data.width == 'number') {
              a.css('width',data.width+'px');
            } else {
              a.css('width', that.width+'px');
            };
            if (typeof data.height == 'number') {
              a.css('height',data.height+'px');
            };
            if (typeof data.html == 'string') {
              a.html(data.html);
            };
            if (typeof data.image == 'string') {
              a.css('background-image', 'url('+data.image+')');
            };
            if (typeof data.background == 'string') {
              a.css('background-color', data.background);
            };
            //style="height:340px;width:200px;"
            changed = true;
          };
        };
        if (changed) {
          that.reRender();
          /*
          setTimeout(function(){
            that.reRender();
            console.log('rerender');
          },100);
          */
        };

      },
      
      this.reRender = function(){
        //that.grid.destroy();
        that.grid = new Minigrid(that.cfg);
        //that.grid.mount();
        $(that.element).find('div.card').each(function(i,a){
          $(a).css({'position':'static','transform':'none'});
        });
        $(that.element).css({'width':'100%','height':'auto','position':'static'});
        that.grid.mount();
      },


      this.free = function() {

      },

      this.init=function() {
        if (typeof that.dd.gutter != 'undefined') {
          that.cfg.gutter = parseInt(that.dd.gutter);
        };
      
        $(that.element).find('div.card').each(function(i,a){
          that.width = Math.max(that.width, $(a).width());
        });
        
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
