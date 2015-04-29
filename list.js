
/*
    Simple list for Functional Programming
    Author: Yiyi Wang
    2014/12/13
 */
var $List, car, cdr, cons, list, list_module,
  slice = [].slice;

list_module = (function() {

  /*
      Construct List data structure
   */
  var List, car, cdr, cons, list;
  List = function(first, rest) {
    this.first = first;
    this.rest = rest;
    return null;
  };

  /*
  get length of list
  eg:
      x = list(1, 2, 3)
      x.length() => 3
   */
  List.prototype.length = function() {
    var list_length;
    list_length = function(l, acc) {
      if (l === null) {
        return acc;
      } else {
        return list_length(l.rest, acc + 1);
      }
    };
    return list_length(this, 0);
  };

  /*
  list to string
   */
  List.prototype.toString = function() {
    var to_string;
    to_string = function(l, output) {
      if (l === null) {
        return output += ")";
      } else if (l instanceof List) {
        return to_string(l.rest, output + (l.first === null ? "()" : (l.first instanceof Array ? "[" + l.first.toString() + "]" : l.first.toString())) + (l.rest === null ? "" : ", "));
      } else {
        return output = output.slice(0, -2) + " . " + l.toString() + ")";
      }
    };
    return to_string(this, "(");
  };

  /*
  list reverse
  eg:
      x = list(1, 2, 3)
      x.reverse() => (3, 2, 1)
   */
  List.prototype.reverse = function() {
    var list_reverse;
    list_reverse = function(l, output) {
      if (l instanceof List) {
        return list_reverse(l.rest, cons(l.first, output));
      } else if (l === null) {
        return output;
      } else {
        return cons(l, output);
      }
    };
    return list_reverse(this, null);
  };

  /*
  list slice
  eg:
      x = list(1, 2, 3, 4, 5)
      x.slice(2) => list(3, 4, 5)
      x.slice(3, 5) => list(4, 5)
      x.slice(-2) => list(4, 5)
   */
  List.prototype.slice = function(start, end) {
    var length, neg, slice1, slice2;
    if (end == null) {
      end = null;
    }
    if (end === null) {
      if (start < 0) {
        start = this.length() + start;
      }
      slice1 = function(l, i) {
        if (i === 0) {
          return l;
        } else {
          return slice1(l.rest, i - 1);
        }
      };
      return slice1(this, start);
    } else {
      neg = start < 0 || end < 0;
      if (neg) {
        length = this.length();
        start = (start < 0 ? length + start : start);
        end = (end < 0 ? length + end : end);
      }
      slice2 = function(l, i, j) {
        if (i === 0) {
          if (j === 0 || l === null) {
            return null;
          } else {
            return cons(l.first, slice2(l.rest, i, j - 1));
          }
        } else {
          return slice2(l.rest, i - 1, j);
        }
      };
      return slice2(this, start, end - start);
    }
  };

  /*
  list ref
  eg:
      x = list(1, 2, 3, 4)
      x.ref(0) => 1
   */
  List.prototype.ref = function(i) {
    var ref;
    if (i < 0) {
      i = this.length() + i;
    }
    ref = function(l, i) {
      if (l === null) {
        return null;
      } else if (i === 0) {
        return l.first;
      } else {
        return ref(l.rest, i - 1);
      }
    };
    return ref(this, i);
  };

  /*
  list append
  eg:
      x = list(1, 2, 3, 4)
      x.append(5) => (1, 2, 3, 4, 5)
      x.append(7, 8) => (1, 2, 3, 4, 7, 8)
   */
  List.prototype.append = function() {
    var append, i, o;
    i = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    o = list.apply(list, i);
    append = function(l, o) {
      if (l === null) {
        return o;
      } else {
        return cons(l.first, append(l.rest, o));
      }
    };
    return append(this, o);
  };

  /*
  list toArray
  eg:
      x = list(1, 2, 3)
      x.toArray() => [1, 2, 3]
   */
  List.prototype.toArray = function() {
    var output, to_array;
    output = [];
    to_array = function(l) {
      if (l === null) {
        return output;
      } else {
        output.push(l.first);
        return to_array(l.rest);
      }
    };
    return to_array(this);
  };

  /*
  list forEach
  eg:
      x = list(1, 2, 3)
      x.forEach(i => console.log(i)) => print 1, 2, 3
   */
  List.prototype.forEach = function(func) {
    var iter;
    iter = function(l) {
      if (l === null) {
        return null;
      } else {
        func(l.first);
        return iter(l.rest);
      }
    };
    return iter(this);
  };
  List.prototype.foreach = List.prototype.forEach;

  /*
  list map
  eg:
      x = list(1, 2, 3)
      x.map(i=>i*2) => (2, 4, 6)
   */
  List.prototype.map = function(func) {
    var iter;
    iter = function(l) {
      if (l === null) {
        return null;
      } else {
        return cons(func(l.first), iter(l.rest));
      }
    };
    return iter(this);
  };

  /*
  list filter
  eg:
      x = list(1, 2, 3, 4)
      x.filter(i => i > 2)  => (3, 4)
   */
  List.prototype.filter = function(func) {
    var iter;
    iter = function(l) {
      if (l === null) {
        return null;
      } else {
        if (func(l.first)) {
          return cons(l.first, iter(l.rest));
        } else {
          return iter(l.rest);
        }
      }
    };
    return iter(this);
  };

  /*
  cons two elements.  same as lisp
  eg:
      x = cons(3, 4)
      y = cons(3, cons(4, null))
   */
  cons = function(a, b) {
    return new List(a, b);
  };

  /*
  car: get first element of list
   */
  car = function(l) {
    return l.first;
  };

  /*
  cdr: get rest elements of list
   */
  cdr = function(l) {
    return l.rest;
  };

  /*
  construct list. same as lisp
  eg:
      x = list(1, 2, 3, 4)
   */
  list = function() {
    var a, create_list;
    a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    create_list = function(a, i) {
      if (i === a.length) {
        return null;
      } else {
        return cons(a[i], create_list(a, i + 1));
      }
    };
    return create_list(a, 0);
  };
  return {
    list: list,
    cons: cons,
    List: List,
    car: car,
    cdr: cdr
  };
})();

$List = list_module.List;

list = list_module.list;

cons = list_module.cons;

car = list_module.car;

cdr = list_module.cdr;

if (typeof module !== "undefined") {
  module.exports.$List = $List;
  module.exports.list = list;
  module.exports.cons = cons;
  module.exports.car = car;
  module.exports.cdr = cdr;
}
