import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";

const eventHandler = new DOMEventHandler();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);

const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);

const print = new ShareButtonPrint(eventHandler, ".btn-print");

facebook.bind();
linkedin.bind();
twitter.bind();
print.bind();
