import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";

const facebook = new ShareButtonFacebook(
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);

const linkedin = new ShareButtonLinkedin(
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);

const twitter = new ShareButtonTwitter(
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);

const print = new ShareButtonPrint(
  ".btn-print",
  "https://www.youtube.com/rodrigobranas"
);

facebook.bind();
linkedin.bind();
twitter.bind();
print.bind();
