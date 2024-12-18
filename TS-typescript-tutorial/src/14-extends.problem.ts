import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Id {
  id: string;
}

interface User extends Id {
  firstName: string;
  lastName: string;
}

interface Post extends Id, Comment {
  title: string;
  body: string;
}

interface Comment extends Id {
  comment: string;
}

// !! extends is a property of interface that type doesn't have.


const post: Post = {
  id: "2",
  title: "title",
  body: "Lorem",
  comment: "Ipsum"
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  // Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
