export const glitcheUtils = {
  // ✅ FIXED FUNCTION: Only runs if elements exist
createSkillsDot () {
  const skillsDotted = document.querySelectorAll(".skills .progress");

  skillsDotted.forEach((skill) => {
    if (!skill.querySelector(".dg")) {
      skill.insertAdjacentHTML(
        "beforeend",
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
    }

    let percentage = skill.getElementsByClassName("percentage")[0];
    if (percentage && !percentage.querySelector(".da")) {
      percentage.insertAdjacentHTML(
        "beforeend",
        '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      let width = skill.clientWidth,
        da = percentage.getElementsByClassName("da")[0];
      da.style.width = `${width}px`;
    }
  });
},
  dotResize() {
    window.addEventListener("resize", () => {
      var skills_dotted = document.querySelectorAll(
        ".skills-list.dotted .progress"
      );
      skills_dotted.forEach((skill) => {
        let width = skill.clientWidth,
          da = skill.getElementsByClassName("da")[0];
        da.style.width = `${width + 1}px`;
      });
    });
  },
};
