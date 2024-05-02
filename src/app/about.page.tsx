import { PageComponent } from "rasengan";

const About: PageComponent = () => {
  return (
    <section>About page</section>
  )
}

About.path = "/about";
About.metadata = {
  title: "About",
  description: "About page",
}

export default About;