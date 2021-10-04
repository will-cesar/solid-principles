import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(className: string) {
    super(className);
  }

  createAction(): any {
    return () => window.print();
  }
}
