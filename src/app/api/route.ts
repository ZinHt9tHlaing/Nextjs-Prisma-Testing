export const dynamic = "force-static";

export async function GET() {
  const posts = [{ id: 1, title: "hello", body: "world" }];

  return Response.json({ posts });
}
