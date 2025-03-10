import * as test from "node:test";
import { spec } from "node:test/reporters";

test
  .run({
    globPatterns: ["mytest.test.mjs"],
    testNamePatterns: ["test1"],
    testSkipPatterns: ["test2"],
    isolation: "none",
  })
  .compose(spec)
  .pipe(process.stdout);
