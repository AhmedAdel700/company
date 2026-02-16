export async function getPosts(offset = 0, limit = 10) {
  // JSONPlaceholder is currently unreachable (ECONNRESET).
  // Switching to EscuelaJS API as a reliable alternative for this demo.
  const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data = await response.json();

  // Mapping EscuelaJS products to the 'posts' format (id, title, body)
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    body: item.description, // Mapping 'description' to 'body' for compatibility
  }));
}
