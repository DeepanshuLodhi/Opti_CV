"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <a
        href="https://github.com/DeepanshuLodhi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      <a
        href="https://www.linkedin.com/in/deepanshu-lodhi-24a88b256/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
