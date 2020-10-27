import Link from "next/link";

const Index = () => (
  <div>
    <h1>Welcome to Jeff's tutorial page</h1>
    <h2>There's nothing much to see here</h2>
    <Link href="/about">
      <a>About page</a>
    </Link>
  </div>
);

export default Index;
