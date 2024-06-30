import wonLogo from "../images/won-logo.png";
import mobialsLogo from "../images/mobials-logo.png";

export default function Experience() {
    return (
      <div className="experience-section" id="work">
        <h2>Work Experience</h2>
        <div className="experience-container">
          <div className="exp exp-1">
            <img
              className="company-logo"
              src={wonLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>Software Developer Intern @ WonsultingAI</h5>
            <p className="p-small">Jan 2022 - Jul 2023</p>
            <div className="line"></div>
            <p>
              Collaborated with a team of 5 to work through all stages of
              product development to develop an AI powered resume building tool
              called ResumAI that launched in mid-October and currently has over
              300 000 users.
            </p>
          </div>
          <div className="exp exp-2">
            <img
              className="company-logo"
              src={mobialsLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>
              Software Developer Intern <br /> @ Mobials Inc.
            </h5>
            <p className="p-small">Jul 2022 - Sep 2022</p>
            <div className="line"></div>
            <p>
              Created dozens of end-to-end and unit tests using Cypress and Vue
              Test Utils respectively to reach 100% test coverage on two of the
              largest repos for AutoVerify.
            </p>
          </div>
          <div className="exp exp-3">
            <img
              className="company-logo"
              src={mobialsLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>
              Co-op Programmer<br /> @ Mobials Inc.
            </h5>
            <p className="p-small">Feb 2022 - Jun 2022</p>
            <div className="line"></div>
            <p>
              For my high school co-op placement, I worked at Mobials to
              redeveloped the corporate website using Webflow, program a
              customer map application, and develop a OKR tracker.
            </p>
          </div>
        </div>
      </div>
    )
}