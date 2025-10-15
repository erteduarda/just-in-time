// apps/web/app/page.tsx
async function getData() {
  const [users, orders] = await Promise.all([
    fetch("http://localhost:3000/users").then((r) => r.json()),
    fetch("http://localhost:3000/orders").then((r) => r.json()),
  ]);
  return { users, orders };
}

export default async function Home() {
  const { users, orders } = await getData();
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Microservices Demo</h1>
      <pre className="mt-4">{JSON.stringify({ users, orders }, null, 2)}</pre>
    </main>
  );
}
