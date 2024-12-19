






import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";


type IsString = string;

export const returnWhatIPassIn = <T extends IsString>(t: T) => t;

//or just <T extends string>

it("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  // @ts-expect-error
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({
    foo: "bar",
  });
});
