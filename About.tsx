import { motion } from "framer-motion";
import hero from "../assets/about-hero.png";

const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "2+", label: "Years Learning & Building" },
  { value: "100%", label: "Responsive Design" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 8%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: "20px", borderRadius: "30px" }}
        >
          <img
            src={hero}
            alt="Philip Mbeta"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontWeight: 700,
            }}
          >
            About Me
          </p>

          <h2 style={{ fontSize: "3rem", margin: "15px 0 25px" }}>
            I build websites that people enjoy using.
          </h2>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
            I'm Philip Mbeta, a software developer from Nairobi with a passion
            for creating modern, responsive, and high-performance web
            applications. I enjoy turning ideas into polished digital products
            that help businesses and users alike.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass"
                style={{
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <h3
                  className="gradient-text"
                  style={{
                    fontSize: "2rem",
                    marginBottom: "10px",
                  }}
                >
                  {stat.value}
                </h3>

                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}