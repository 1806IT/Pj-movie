import { Top250 } from './top250'
import { UsBox } from './usBox'
import { Search } from './search'
!function(){
    var that =null
    function App(){
        
        this.$tabs=$('footer>div');
        this.$panels=$('section');
        this.top250=new Top250();
        this.usBox = new UsBox();
        this.search=new Search()
        that=this;
        /* top250.init(); */
    }
    App.prototype.init=function(){
        this.bind();
        this.top250.init()
        this.usBox.init()
        this.search.init()
    }
    App.prototype.bind=function(){
        var self=this;
        this.$tabs.on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            self.$panels.eq($(this).index()).fadeIn().siblings().hide();
        })
    }
    window.App=App
    var app = new App()
    app.init()
}()



/*主程序*/

/* !function () {
    var app = {
        init: function () {
            this.$tabs = $('footer>div');
            this.$panels = $('section');
            this.bind();
<<<<<<< HEAD
<<<<<<< HEAD
            /*             top250.init();
                        usBox.init();
                        search.init(); */
/*         },
        bind: function () {
            var self = this;
            this.$tabs.on('click', function () {
=======
=======
>>>>>>> d2a292bd6cbdd66e70242e223f83d3f432343f63
/*             top250.init();
            usBox.init();
            search.init(); */
        },
        bind:function(){
            var self=this;
            this.$tabs.on('click',function(){
>>>>>>> d2a292bd6cbdd66e70242e223f83d3f432343f63
                $(this).addClass('active').siblings().removeClass('active');
                self.$panels.eq($(this).index()).fadeIn().siblings().hide();
            });
        }
    };
    app.init();
}() */ 

