import React from "react";

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
