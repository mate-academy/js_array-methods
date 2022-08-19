1.  [CODE STYLE] - don't mutate original array elements - it will cause unexpected joineds later on.
2.  [CODE STYLE] - avoid creating needless copies of arrays, you can iterate existing array
3.  [CODE STYLE] - use `plus` operator with assignment operator `=` if you want to add something to existing value

BAD EXAMPLE:
```
let a = 1;

a = a + 2;
```

GOOD EXAMPLE:
```
let a = 1;

a += 2;
```

4. [CODE STYLE] - avoid using nested `if` statements, we are sure that you can do it without them :)
5. [CODE STYLE] - don't write loops inside `if` statement. It's making your code too complicated. Remember that loop with `false` condition simply will iterate 0 times.
