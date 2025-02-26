const Services = () => {
  return (
    <div className="section service">
      <div className="content">
        <div className="title">
          <div className="title_inner">My Services</div>
        </div>
        <div className="service-items">
          {/* Frontend Development */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-social-html5" />
            </div>
            <div className="name">Frontend Development</div>
            <p>
              Crafting responsive, high-performance, and user-friendly interfaces using 
              <strong> React, Next.js, TailwindCSS, and JavaScript.</strong>
            </p>
          </div>

          {/* Mobile Application Development */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ipad" />
            </div>
            <div className="name">Mobile Application Development</div>
            <p>
              Building cross-platform mobile applications using <strong>Flutter and Dart</strong>, 
              optimized for seamless user experiences.
            </p>
          </div>

          {/* Full-Stack Development */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-code-working" />
            </div>
            <div className="name">Full-Stack Development</div>
            <p>
              Developing end-to-end applications using <strong>Laravel, ASP.NET Core, SQLite, and MySQL</strong>, 
              ensuring scalability and security.
            </p>
          </div>

          {/* AI & Research */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-analytics" />
            </div>
            <div className="name">AI & Research</div>
            <p>
              Working on cutting-edge research in <strong>AI/ML, sentiment analysis, and traffic management systems</strong>, 
              with publications in international conferences.
            </p>
          </div>

          {/* Freelance & Web Solutions */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-social-chrome" />
            </div>
            <div className="name">Freelance & Web Solutions</div>
            <p>
              Delivering custom web solutions for businesses & NGOs, using <strong>Next.js, Laravel, and React</strong>, 
              deployed on <strong>Digital Ocean</strong>.
            </p>
          </div>

          {/* IT Management & Event Tech */}
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-help-buoy" />
            </div>
            <div className="name">IT Management & Event Tech</div>
            <p>
              Managed IT operations, web interfaces, and technical setups for large-scale events like 
              <strong> Hult Prize at AUST</strong>, handling PR, logistics, and strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
