tested with node v22.14.0 and v23.8.0

```
$ node run-isolation-process.mjs
✔ test1 (1.0808ms)
```
is correct


```
$ node run-isolation-none.mjs
✔ test1 (1.3309ms)
✔ test2 (0.3099ms)
✔ test3 (0.2709ms)
```
is incorrect