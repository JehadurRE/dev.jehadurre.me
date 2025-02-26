"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};





// OTHER SKILLS (Linear Animation)
export const OtherSkills = () => {
  const skills = [
    { id: 1, title: "Problem-Solving", value: 90 },
    { id: 2, title: "Critical Thinking", value: 85 },
    { id: 3, title: "IT Management", value: 80 },
    { id: 4, title: "Communication & Teamwork", value: 88 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div className="section skills" ref={ref}>
      <div className="content">
        <div className="title">
          <div className="title_inner">Other Skills</div>
        </div>
        <div className="skills">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <div className="progress">
                  <motion.div
                    className="percentage"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${skill.value}%` } : {}}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </motion.div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


// CODING SKILLS (Circular Animation)
export const CodingSkills2 = () => {
  
  // TODO : Make The Dynamic Color Palatte 
// Get the CSS variable dynamically
const activeColor =  "#f26b38"; // Fallback to default if not found
  const skills = [
    { id: 1, title: "JavaScript / TS", value: 90 },
    { id: 2, title: "React.js / Next.js", value: 85 },
    { id: 3, title: "PHP / Laravel", value: 80 },
    { id: 4, title: "Java / JavaFX", value: 82 },
    { id: 5, title: "ASP.NET / C#", value: 75 },
    { id: 6, title: "Flutter / Dart", value: 85 },
    { id: 7, title: "Python / AI & ML", value: 70 },
    { id: 8, title: "HTML / CSS / Tailwind", value: 95 },
    { id: 9, title: "MySQL / MongoDB / Firebase", value: 82 },
    { id: 10, title: "Embedded Systems (Arduino, ESP-32, Raspberry Pi)", value: 70 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div className="section skills" ref={ref}>
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <motion.svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="progress-circle"
                >
                  <circle cx="50" cy="50" r="45" strokeWidth="8" stroke="#ddd" fill="none" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="8"
                    stroke={activeColor}
                    fill="none"
                    strokeDasharray="282.74"
                    strokeDashoffset="282.74"
                    animate={isInView ? { strokeDashoffset: 282.74 - (282.74 * skill.value) / 100 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <text x="50" y="55" textAnchor="middle" fontSize="14" fill="#333">
                    {skill.value}%
                  </text>
                </motion.svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};









export const KnowledgeCheck = () => {
  const knowledgeItems = [
    "Software Development Life Cycle (SDLC)",
    "Cloud Computing & Deployment",
    "API Development & Integration",
    "Version Control (Git, GitHub, GitLab)",
    "Database Management (SQL & NoSQL)",
    "Cybersecurity Best Practices",
    "Embedded Systems & IoT",
    "Machine Learning & AI Fundamentals",
    "Project Management & Team Collaboration",
    "Technical Writing & Documentation",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div className="section skills" ref={ref}>
      <div className="content">
        <div className="title">
          <motion.div
            className="title_inner"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Knowledge
          </motion.div>
        </div>
        <div className="skills list">
          <ul>
            {knowledgeItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="name">{item}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};







export const LanguagesSkills = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot(), 1000);
  }, []);

  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "82%" }}>
                  <span className="percent">82%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Bangla</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
};


import { motion ,useInView } from "framer-motion";
import { glitcheUtils } from "@/utility";
import { Fragment, useEffect , useRef } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
    
      {coding && <CodingSkills2 />}

      {design && <OtherSkills />}
      
      {knowledge && <KnowledgeCheck />}
      {languages && <LanguagesSkills />}
    </Fragment>
  );
};
export default Skills;
