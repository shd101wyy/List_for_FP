###
    Simple list for Functional Programming
    Author: Yiyi Wang
    2014/12/13

###
list_module = (() ->
    
    ###
        Construct List data structure
    ###
    List = (first, rest) ->
        this.first = first
        this.rest = rest
        null
    
    ###
    get length of list
    eg:
        x = list(1, 2, 3)
        x.length() => 3
    ###
    List.prototype.length = () ->
        list_length = (l, acc) ->
            if l == null
                acc
            else
                list_length l.rest, acc+1
        list_length this, 0
    ###
    list to string
    ###
    List.prototype.toString = () ->
        to_string = (l, output) ->
            if l == null
                output += ")"
            else if (l instanceof List)
                to_string(l.rest, output + l.first.toString() + (if l.rest == null then "" else ", "))
            else
                output = output.slice(0, -2) + " . " + l.toString() + ")"
        to_string(this, "(")
    
    ###
    list reverse
    eg:
        x = list(1, 2, 3)
        x.reverse() => (3, 2, 1)
    ###
    List.prototype.reverse = () ->
        list_reverse = (l, output) ->
            if l instanceof List
                list_reverse l.rest, cons(l.first, output)
            else if l == null 
                output
            else
                cons l, output
        list_reverse(this, null)
                
    ###
    list slice
    eg:
        x = list(1, 2, 3, 4, 5)
        x.slice(2) => list(3, 4, 5)
        x.slice(3, 5) => list(4, 5)
        x.slice(-2) => list(4, 5)
    ###
    List.prototype.slice = (start, end=null) ->
        if end == null
            if start < 0
                start = this.length() + start
            slice1 = (l, i) ->
                if i == 0
                    l 
                else 
                    slice1(l.rest, i-1)
            slice1(this, start)
        else 
            neg = (start < 0 or end < 0)
            if neg
                length = this.length()
                start = (if start < 0 then length + start else start)
                end = (if end < 0 then length + end else end)
                
            slice2 = (l, i, j) -> 
                if i==0
                    if j==0 or l==null
                        null
                    else
                        cons l.first, slice2(l.rest, i, j - 1)
                else
                    slice2(l.rest, i-1, j)
            slice2(this, start, end-start)
    
    ###
    list ref
    eg: 
        x = list(1, 2, 3, 4)
        x.ref(0) => 1
    ###
    List.prototype.ref = (i) ->
        if i < 0
            i = this.length() + i
        ref = (l, i)->
            if l == null 
                null
            else if i == 0
                l.first
            else
                ref l.rest, i-1
    
        ref(this, i)
        
        
    ###
    list append
    eg:
        x = list(1, 2, 3, 4)
        x.append(5) => (1, 2, 3, 4, 5)
        x.append(7, 8) => (1, 2, 3, 4, 7, 8)
    ###
    List.prototype.append = (i...) ->
        o = list.apply(list, i)
        append = (l, o) ->
            if l == null 
                o 
            else 
                cons l.first, append(l.rest, o)
        append this, o
        
    ###
    list toArray
    eg:
        x = list(1, 2, 3)
        x.toArray() => [1, 2, 3]
    ###
    List.prototype.toArray = () ->
        output = []
        to_array = (l) ->
            if l == null
                output
            else 
                output.push l.first
                to_array l.rest
        to_array(this)
        
    ### 
    list forEach
    eg:
        x = list(1, 2, 3)
        x.forEach(i => console.log(i)) => print 1, 2, 3
    ###
    List.prototype.forEach = (func) -> 
        iter = (l) ->
            if l == null 
                null 
            else 
                func(l.first)
                iter(l.rest)
        iter(this)
        
        
    ### 
    list map
    eg:
        x = list(1, 2, 3)
        x.map(i=>i*2) => (2, 4, 6)
    ###
    
    List.prototype.map = (func) ->
        iter = (l) ->
            if l == null 
                null
            else 
                cons func(l.first), iter(l.rest)
                
        iter(this)
    
        
    ###
    cons two elements.  same as lisp
    eg: 
        x = cons(3, 4)
        y = cons(3, cons(4, null))
    ###
    cons = (a, b) ->
        new List(a, b)
    
    ###
    construct list. same as lisp
    eg:
        x = list(1, 2, 3, 4)
    ###
    list = (a...) ->
        create_list = (a, i) ->
            if i == a.length
                null 
            else
                cons a[i], create_list(a, i+1)
        create_list(a, 0)
        
    {
        list: list 
        cons: cons}
        
    )()
        
list = list_module.list
cons = list_module.cons
x = list(1, 2, 3, 4, 5)
x = x.map (i)->i*2
console.log x.toString()

