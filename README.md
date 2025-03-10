tested with node v22.14.0 and v23.8.0

```
$ node run-isolation-process.mjs
a1
✔ a1 (1.0772ms)
```
is correct


```
$ node run-isolation-none.mjs
a1
a2
b1
✔ a1 (1.1037ms)
✔ a2 (0.2813ms)
✔ b1 (0.2466ms)
```
is incorrect