import Card from "./Card";

function Cards() {
  return (
    <section id="skills" className="py-20 px-6 fade-up">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        <Card title="About Me" content="Aspiring Full-Stack Developer passionate about building applications." />

        <Card title="Skills" content="Python, SQL, Editing, Cinematography, Filmography" />

        <Card title="Projects" content="Currently working on building real-world projects." />

        <Card 
          title="Contact" 
          content="📧 sumanth.prt@email.com | github.com/issumanth | linkedin.com/in/sumanth-g"
        />

      </div>

    </section>
  );
}

export default Cards;