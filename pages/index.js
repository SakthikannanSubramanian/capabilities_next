import Link from "next/link";

const Index = () => (
  <div>
    <h1>Welcome Sakthi!!</h1>
    <Link href="/about">
      <a title="about me">About page</a>
    </Link>
  </div>
);

export default Index;
