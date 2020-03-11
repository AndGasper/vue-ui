# material-ui: vue flavored
- Why? Because I can't read.

```
// name.d.ts
// index.d.ts

// input: node make-component.js ComponentName
// output: [ 'node', 'path/to/make-component.js', 'ComponentName']
//              0       1                               2
```

(because I won't remember)
### How do I make a component directory? 
```
node ./packages/helpers/make-component.js TheComponentName
```

```
{
    errorno: -4075,
    code: 'EEXIST',
    syscall: 'mkdir',
    path: '/path/to/the/thing/that/it/was/trying/to/make'
}
```

```
const linksDomNodes = document.querySelectorAll('tbody .js-navigation-item .content a[title]');
const links = Array.from(linksDomNodes);
const components = [];
const componentNameTest = new RegExp('^[A-Z][A-z]{1,}');
// could maybe be a reduce if you're willing to buy the argument that
// it is reducing down to 1 list of title
// but then, there's probably an argument to be made about
// having to keep this ever growing list in the
// functions invocation? 
// call 1: []
// call 2: [a]
// call 3: [a] // because maybe the item didn't return what I wanted
// call 4: [a, b]
// call 5: [a, b, c]
// call 6: [a, b, c]
```
vs. (Blerg, I miss that second parenthesis every time...)
```
function(item) {
    if (componentNameTest.test(link.title)) {
        // how does JS handle that reference again? - hopefully, eLeGaNtLy
        components.push(link.title); 
    }) else {
        return;
    }
}
```
// kind of seems like a misuse of filter...but meh
```
links.filter(function(link) {
    if (componentNameTest.test(link.title)) {
        components.push(link.title);
        return;
    }) else {
        return; 
    }
});
```
vs.
// Kind of wonky since map returns an array
```
links.map(function(link) {
    if (componentNameTest.test(link.title)) {
        components.push(link.title);
    }
    return;
});
```
```
links.forEach(function(link) {
    if (componentNameTest.test(link.title)) {
        components.push(link.title);
    }
    return;
});
```

...isn't bikeshedding fun? 


```
const linksDomNodes = document.querySelectorAll('tbody .js-navigation-item .content a[title]');
const links = Array.from(linksDomNodes);
const components = [];
const componentNameTest = new RegExp('^[A-Z][A-z]{1,}');
links.forEach(function(link) {
    if (componentNameTest.test(link.title)) {
        components.push(link.title);
    }
    return;
});
```



- `node ./packages/helpers/make-component.js SomeComponent`
- `node ./packages/helpers/make-props-file.js` => just make the props file; don't feel like half-heartedly opening the "well, _what if_ the file does not exist?" can of worms.



- Make a component: `node ./packages/helpers/make-component.js TestComponent`
- FMSU - make all the components: `node ./packages/helpers/make-a-bunch-of-components.js`