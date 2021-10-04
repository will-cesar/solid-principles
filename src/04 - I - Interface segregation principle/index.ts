import AbstractShareButton from "./AbstractShareButton";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";

const facebook: AbstractShareButton = new ShareButtonFacebook(
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);

const twitter: AbstractShareButton = new ShareButtonTwitter(
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);

const print = new ShareButtonPrint(".btn-print");

facebook.bind();
linkedin.bind();
twitter.bind();
print.bind();
