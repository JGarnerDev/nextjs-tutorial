import Link from "next/link";

const About = () => (
  <div>
    <h1>This is the About page</h1>
    <h2>You should also have minimal expectations for content here, too</h2>
    <Link href="/">
      <a>Home page</a>
    </Link>
  </div>
);

export default About;
