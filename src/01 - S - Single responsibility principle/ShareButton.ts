import EventHandler from "./EventHandler";

export default class ShareButton {
  eventHandler: EventHandler;
  url: string;

  constructor(url: string) {
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  bind(className: string, socialNetwork: string) {
    let link: string;

    if (socialNetwork === "twitter") {
      link = `https://twitter.com/share?url=${this.url}`;
    }

    if (socialNetwork === "facebook") {
      link = `https://www.facebook.com/sharer.php?u=${this.url}`;
    }

    if (socialNetwork === "linkedin") {
      link = `https://www.linkedin.com/shareArticle?url=${this.url}`;
    }

    this.eventHandler.addEventListenerToClass(className, "click", () =>
      window.open(link)
    );
  }
}
