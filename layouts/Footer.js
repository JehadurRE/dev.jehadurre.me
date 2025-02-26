const Footer = () => {
  return (
    <footer>
     <div className="soc">
  <a target="_blank" href="https://github.com/JehadurRE">
    <span className="ion ion-social-github" />
  </a>
  <a target="_blank" href="https://www.linkedin.com/in/jehadurre/">
    <span className="ion ion-social-linkedin" />
  </a>
  <a target="_blank" href="https://twitter.com/jehadurre">
    <span className="ion ion-social-twitter" />
  </a>
  <a target="_blank" href="https://wa.me/+8801788242956">
    <span className="ion ion-social-whatsapp" />
  </a>
</div>

      <div className="copy">
        © {new Date().getFullYear()} JehadurRE@CyArm. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
