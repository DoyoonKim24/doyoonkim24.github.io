import wonLogo from "../../public/images/won-logo.png";
import mobialsLogo from "../../public/images/mobials-logo.png";
import empathiaLogo from "../../public/images/empathia-logo.png";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  // Create a ref and inView state for each experience
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div className="experience-section" id="work">
      <h2>Work Experience</h2>
      <div className="experience-container">
        <div className={`exp exp-1 ${inView1 ? 'fade-in' : 'fade-out'}`} ref={ref1}>
          <Image
            className="company-logo"
            src={empathiaLogo}
            alt="Logo of Empathia.ai"
          />
          <h5>UI/UX Designer @ Empathia.ai</h5>
          <p className="p-small">Jul 2024 - Present</p>
          <div className="line"></div>
          <p>
            Redesigned the Empathia.ai website to align with the company's vision, creating a more modern and professional 
            platform with interactive elements and a refined, responsive design that improved usability across all devices.
          </p>
        </div>
        
        <div className={`exp exp-2 ${inView2 ? 'fade-in' : 'fade-out'}`} ref={ref2}>
          <Image
            className="company-logo"
            src={wonLogo}
            alt="Logo of WonsultingAI"
          />
          <h5>Software Developer Intern @ WonsultingAI</h5>
          <p className="p-small">Jan 2022 - Jul 2023</p>
          <div className="line"></div>
          <p>
            Collaborated with a team of 5 to work through all stages of
            product development to develop an AI powered resume building tool
            called ResumAI that launched in mid-October and currently has over
            300,000 users.
          </p>
        </div>

        <div className={`exp exp-3 ${inView3 ? 'fade-in' : 'fade-out'}`} ref={ref3}>
          <Image
            className="company-logo"
            src={mobialsLogo}
            alt="Logo of Mobials Inc."
          />
          <h5>Software Developer Intern @ Mobials Inc.</h5>
          <p className="p-small">Jul 2022 - Sep 2022</p>
          <div className="line"></div>
          <p>
            Created dozens of end-to-end and unit tests using Cypress and Vue
            Test Utils respectively to reach 100% test coverage on two of the
            largest repos for AutoVerify.
          </p>
        </div>

        <div className={`exp exp-4 ${inView4 ? 'fade-in' : 'fade-out'}`} ref={ref4}>
          <Image
            className="company-logo"
            src={mobialsLogo}
            alt="Logo of Mobials Inc."
          />
          <h5>Co-op Programmer @ Mobials Inc.</h5>
          <p className="p-small">Feb 2022 - Jun 2022</p>
          <div className="line"></div>
          <p>
            For my high school co-op placement, I worked at Mobials to
            redevelop the corporate website using Webflow, program a
            customer map application, and develop an OKR tracker.
          </p>
        </div>
      </div>
    </div>
  );
}
