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
        else
            output
    list_reverse(this, null)
            

cons = (a, b) ->
    new List(a, b)

list = (a...) ->
    create_list = (a, i) ->
        if i == a.length
            null 
        else
            cons a[i], create_list(a, i+1)
    create_list(a, 0)
    
x = list(1, 2, list(3, 4), 5)
console.log(x.reverse().toString())