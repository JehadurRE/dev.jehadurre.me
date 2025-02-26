import DynamicAge from "./DynamicAge";

const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/icon.png" alt="" />
        </div>
        <div className="desc">
          <p style={{ textAlign: "justify" }}>
            Welcome to my portfolio! I am <strong>JehadurRE</strong>, a
            dedicated <strong>Software Engineer</strong> with a strong
            foundation in{" "}
            <em>
              full-stack development, mobile applications, AI/ML, and research
            </em>
            . I specialize in crafting{" "}
            <strong>
              efficient, scalable, and high-performance digital solutions
            </strong>{" "}
            using{" "}
            <span style={{ color: "#007bff", fontWeight: "bold" }}>
              Next.js
            </span>
            ,{" "}
            <span style={{ color: "#28a745", fontWeight: "bold" }}>
              Laravel
            </span>
            ,{" "}
            <span style={{ color: "#dc3545", fontWeight: "bold" }}>
              ASP.NET Core
            </span>
            ,{" "}
            <span style={{ color: "#ff5722", fontWeight: "bold" }}>
              Flutter
            </span>
            , and various backend technologies.
          </p>

          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Jehadur Rahman (Emran)
              </li>
              <li>
                <strong>Age:</strong> {<DynamicAge birthDate="1999-05-22" />}
              </li>
              <li>
                <strong>Blood Group:</strong> O+
              </li>
              <li>
                <strong>Citizenship:</strong> Bangladesh
              </li>
              <li>
                <strong>Residence: </strong> Dhaka
              </li>
              <li>
                <strong>E-mail:</strong> emran.jehadur@gmail.com <br /> &emsp;
                &emsp; &emsp; contact@jehadurre.me
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
