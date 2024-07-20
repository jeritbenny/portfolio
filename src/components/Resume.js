import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume-div">
      <div className="edu-div">
        <div className="edu-head">Education</div>
        <div className="edu-para">
          <h1 className="h11">Bachelors of Computer Application</h1>
          <p className="h11">SES College ,Kannur University</p>
        </div>
      </div>
      <div className="work-div">
        <div className="work-head">Work Experience</div>
        <div className="work-para">
          <div className="para">
            <h1 className="h11">Btrac</h1>
            <p className="h11">MERN Stack Developer</p>
          </div>
          <div className="para1">
            <h1 className="h11">Swasya Tech Labs</h1>
            <p className="h11">React.js Developer</p>
          </div>
        </div>
      </div>
      <div className="cert-div">
        <div className="cert-head">Certification</div>
        <div className="cert-para">
          <h1 className="h11">National Council for Technology and Training</h1>
          <p className="h11">MER(A)N Stack Course , Luminar Technolab</p>
        </div>
        </div>
     
      <div className="skill">
        <div className="skill-head">Skills</div>
        <div className="skill-para">
          <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>


          <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Bootstrap</span>
            <div className="skill-bar">
              <span className="skill-per bootstrap">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>


          <div className="skill-box">
            <span className="title">JavaScript</span>
            <div className="skill-bar">
              <span className="skill-per js">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>


          <div className="skill-box">
            <span className="title">React</span>
            <div className="skill-bar">
              <span className="skill-per react">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Express.js</span>
            <div className="skill-bar">
              <span className="skill-per express">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Node.js</span>
            <div className="skill-bar">
              <span className="skill-per node">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">MongoDB</span>
            <div className="skill-bar">
              <span className="skill-per mongo">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Angular</span>
            <div className="skill-bar">
              <span className="skill-per angular">
                <span className="tooltip">30%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Git</span>
            <div className="skill-bar">
              <span className="skill-per git">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resume;
