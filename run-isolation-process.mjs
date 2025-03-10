import * as test from "node:test";
import { spec } from "node:test/reporters";

test
  .run({
    globPatterns: ["mytest.test.mjs"],
    testNamePatterns: ["a"],
    testSkipPatterns: ["a2"],
    isolation: "process",
  })
  .compose(spec)
  .pipe(process.stdout);
