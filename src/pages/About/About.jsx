import StarIcon from "../../assets/icons/StarIcon";
import "./About.css";


function About() {
  const values = [
    {
      title: "Quality First",
      text: "Every product is hand-tested by our engineering team before launch.",
    },
    {
      title: "Fast Shipping",
      text: "Free worldwide delivery on orders over $99, shipped within 24 hours.",
    },
    {
      title: "2-Year Warranty",
      text: "We stand behind every gadget with industry-leading protection.",
    },
    {
      title: "Customer Support",
      text: "Real humans, available 24/7 to help with anything you need.",
    },
  ];

  return (

    <>
      <section className="section">
        <div className="container">
          <header className="about-hero">
            <span className="hero-badge">
              <span className="dot" /> Our Story
            </span>
            <h1 className="section-title about-title">
              We build the tools that{" "}
              <span className="text-accent">power your day</span>
            </h1>
            <p className="section-subtitle about-lead">
              NovaTech started in 2020 with a simple idea: premium gadgets should
              be accessible to everyone. Today we serve customers in 40+ countries
              with audio, wearables and gaming gear engineered to last.
            </p>
          </header>

          <div className="about-stats">
            <div>
              <strong>50K+</strong>
              <span>Customers</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>Countries</span>
            </div>
            <div>
              <strong>1.2K+</strong>
              <span>Products</span>
            </div>
            <div>
              <strong>
                4.9
                <StarIcon className={"star-icon"} />
              </strong>
              <span>Avg. Rating</span>
            </div>
          </div>

          <div className="about-values">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>

  );
}

export default About;
