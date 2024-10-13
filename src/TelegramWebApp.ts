/* eslint-disable @typescript-eslint/no-explicit-any */
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface WebApp {
  ready: () => void;
  initData: any;
  initDataUnsafe: any;
  sendData: (data: string) => void;
}

declare global {
  interface Window {
    Telegram?: { WebApp?: WebApp };
  }
}

class TelegramWebApp {
  private webApp: WebApp | null = null;

  constructor() {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      this.webApp = window.Telegram.WebApp;
      alert("TelegramWebApp");
      alert(JSON.stringify(this.webApp))
    } else {
      console.warn("Telegram Web App API is only available in browser environments.");
    }
  }

  // Initialize the Web App and notify Telegram that the app is ready
  public init(): void {
    if (this.webApp) {
      this.webApp.ready();
      alert("ready");
    }
  }

  // Retrieve Telegram user information
  public getUserInfo(): TelegramUser | null {
    alert("initData"+this.webApp?.initData);
    alert("initData"+this.webApp?.initDataUnsafe);
    alert("initData JS"+JSON.stringify(this.webApp?.initData));
    alert("initData JS"+JSON.stringify(this.webApp?.initDataUnsafe));
    return this.webApp?.initDataUnsafe?.user || null;
  }

  // Send data payload back to Telegram
  public sendData(data: string): void {
    if (this.webApp) {
      this.webApp.sendData(data);
    }
  }
}

export default new TelegramWebApp();
