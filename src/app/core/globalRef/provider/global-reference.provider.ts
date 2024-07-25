import { IGlobalRef } from '../model/global';

export class BrowserGlobalRef {
  static browserGlobals(): IGlobalRef { return window as IGlobalRef; }
  static getScreenWidth(): number { return window.outerWidth; }
  static open(url: string, parent: string): void { window.open(url, parent); }
}
