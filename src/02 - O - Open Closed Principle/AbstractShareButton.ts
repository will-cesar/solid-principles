import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  className: string;
  eventHandler: EventHandler;
  url: string;

  constructor(className: string, url: string) {
    this.className = className;
    this.eventHandler = new EventHandler();
    this.url = url;
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();

    this.eventHandler.addEventListenerToClass(this.className, "click", () =>
      window.open(link)
    );
  }
}
