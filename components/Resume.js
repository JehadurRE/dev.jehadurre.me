const Resume = () => {
  return (
    <div className="section resume">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">January 2023 – September 2024</div>
                <div className="name">Freelance Web Developer</div>
                <p>Developed and maintained websites for clients, including:</p>
                <ul>
                  <li>
                    <strong>
                      titc.com.au (Teaching & Coaching Institution):
                    </strong>{" "}
                    Built the website from scratch; started with WordPress,
                    later migrated to Next.js/Tailwind CSS. Managed deployment &
                    updates using Cyber Panel and Digital Ocean.
                  </li>
                  <li>
                    <strong>bchrd.org (NGO):</strong> Developed a full-stack
                    site with Laravel, SQLite, and React. Deployed using Cyber
                    Panel on Digital Ocean with ongoing maintenance.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">2019 – 2021</div>
                <div className="name">
                  IT Management Lead / Head of Public Relations & Outreach
                </div>
                <p>
                  <strong>
                    Hult Prize at AUST / Ahsanullah University of Science &
                    Technology, Dhaka, Bangladesh
                  </strong>{" "}
                </p>
                <ul>
                  <li>
                    Managed web interface development, event data, and IT
                    resources (audio, video, presentations).
                  </li>
                  <li>
                    Oversaw public relations for events with 500+ participants
                    and served as second-in-command, aiding strategic planning
                    and execution.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">2021 – 2023</div>
                <div className="name">Chief of Strategy</div>
                <p>
                  <strong>Hult Prize Regional, Mumbai, India</strong>
                </p>
                <ul>
                  <li>
                    Led strategic planning and execution for regional events.
                  </li>
                  <li>
                    Coordinated with international teams to align event
                    objectives and outcomes.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2019 - 2023</div>
                <div className="name">
                  Ahsanullah University of Science & Technology
                </div>
                <p>Bachelor of Science in Computer Science & Engineering. </p>
                <br />
                <strong>Activities:</strong>
                <ul>
                  <li>
                    IT Management Lead and Head of Public Relations & Outreach
                    at Hult Prize at AUST (2019 – 2021)
                  </li>
                  <li>
                    Chief of Strategy at Hult Prize Regional, Mumbai, India
                    (2021 – 2023)
                  </li>
                  <li>
                    Executive Committee Member of AUST Innovation and Design
                    Club
                  </li>
                  <li>Organized 10+ seminars and workshops</li>
                  <li>
                    Participated in "Research Symposium 2023: An Intra-AUST
                    Research Exhibition" organized by AUST Research and
                    Publication Club
                  </li>
                  <li>
                    Participated in "CSE Carnival 1.0" by Integer43 - Software
                    Exhibition 2023
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">2016 - 2018</div>
                <div className="name">Saint Joseph Higher Secondary School</div>
                <p>H.S.C in Science.</p>
                <br />
                <strong>Activities:</strong>
                <ul>
                  <li>Engaged in various science fairs and exhibitions</li>
                  <li>Member of the school's science club</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">2014 - 2016</div>
                <div className="name">Bhola Govt. High School</div>
                <p>S.S.C in Science.</p>
                <br />
                <strong>Activities:</strong>
                <ul>
                  <li>
                    Active participant in inter-school science competitions
                  </li>
                  <li>Member of the debate club</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
