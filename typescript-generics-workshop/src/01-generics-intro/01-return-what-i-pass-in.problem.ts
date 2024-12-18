import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPassIn = <Type>(t: Type): Type => {
  return t;
};

// or like this:
// function returnWhatIPassIn<T>(t: T): T {
//   return t
// }

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
