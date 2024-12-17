import { expect, it } from "vitest";

// interface Cache {
//   [index: string]: string;
// }

type Cache = {
  [index: string]: string;
}

const createCache = () => {
  //1 const cache: {
  //    [index: string]: string
  //   } = {};

  //2 with a custom type or an interface:

  // const cache: Cache = {};

  //3 with a record utility type:

  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
