import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  // } catch (error: unknown) { // error: any is not good practice
  //   // some code that handles the error
  //   if (typeof error === "string") {
  //     // handle string error
  //   } else if (error instanceof Error) {
  //     // handle Error object
  //   } else {
  //     // handle other types of errors
  //   }
  // }

} catch (e) {
  if (e instanceof Error) {
    return e.message;
  }
}

};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
