// app/posts/page.tsx
import { getPosts } from "@/lib/api";
import PostsList from "./PostsList";

export default async function Page() {
  const posts = await getPosts();

  // We fetch on the server and "hydrate" the client component via props
  return <PostsList initialPosts={posts} />;
}
