import {
  assertEquals,
  assertNotEquals,
} from "http://deno.land/std/testing/asserts.ts";

Deno.test({
  // name of the test
  name: "testing example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});
Deno.test("example", function (): void {
  assertEquals("world", "world");
  assertEquals({ hello: "world" }, { hello: "world" });
});
