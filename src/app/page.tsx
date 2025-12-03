export default async function Home() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("App is running");
    }, 2000);
  });

  return (
    <main>
      <h1>{data as string}</h1>
    </main>
  );
}
