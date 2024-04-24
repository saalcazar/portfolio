import About from "./about/About"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"

const Home = () => {
  return (
    <main className="main">
      <About />
      <Projects />
      <Experience />
    </main>
  )
}

export default Home