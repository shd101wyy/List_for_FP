var $List,car,cdr,cons,list,list_module,__slice=[].slice;
list_module=function(){var d,e,f;d=function(b,a){this.first=b;this.rest=a;return null};d.prototype.length=function(){var b;b=function(a,c){return null===a?c:b(a.rest,c+1)};return b(this,0)};d.prototype.toString=function(){var b;b=function(a,c){return null===a?c+")":a instanceof d?b(a.rest,c+(null===a.first?"()":a.first.toString())+(null===a.rest?"":", ")):c.slice(0,-2)+" . "+a.toString()+")"};return b(this,"(")};d.prototype.reverse=function(){var b;b=function(a,c){return a instanceof d?b(a.rest,e(a.first,
    c)):null===a?c:e(a,c)};return b(this,null)};d.prototype.slice=function(b,a){var c,d,f;null==a&&(a=null);if(null===a)return 0>b&&(b=this.length()+b),d=function(a,b){return 0===b?a:d(a.rest,b-1)},d(this,b);if(0>b||0>a)c=this.length(),b=0>b?c+b:b,a=0>a?c+a:a;f=function(a,b,c){return 0===b?0===c||null===a?null:e(a.first,f(a.rest,b,c-1)):f(a.rest,b-1,c)};return f(this,b,a-b)};d.prototype.ref=function(b){var a;0>b&&(b=this.length()+b);a=function(b,d){return null===b?null:0===d?b.first:a(b.rest,d-1)};return a(this,
        b)};d.prototype.append=function(){var b,a;a=1<=arguments.length?__slice.call(arguments,0):[];a=f.apply(f,a);b=function(a,d){return null===a?d:e(a.first,b(a.rest,d))};return b(this,a)};d.prototype.toArray=function(){var b,a;b=[];a=function(c){if(null===c)return b;b.push(c.first);return a(c.rest)};return a(this)};d.prototype.forEach=function(b){var a;a=function(c){if(null===c)return null;b(c.first);return a(c.rest)};return a(this)};d.prototype.foreach=d.prototype.forEach;d.prototype.map=function(b){var a;
            a=function(c){return null===c?null:e(b(c.first),a(c.rest))};return a(this)};d.prototype.filter=function(b){var a;a=function(c){return null===c?null:b(c.first)?e(c.first,a(c.rest)):a(c.rest)};return a(this)};e=function(b,a){return new d(b,a)};f=function(){var b,a;b=1<=arguments.length?__slice.call(arguments,0):[];a=function(b,d){return d===b.length?null:e(b[d],a(b,d+1))};return a(b,0)};return{list:f,cons:e,List:d,car:function(b){return b.first},cdr:function(b){return b.rest}}}();$List=list_module.List;
            list=list_module.list;cons=list_module.cons;car=list_module.car;cdr=list_module.cdr;
