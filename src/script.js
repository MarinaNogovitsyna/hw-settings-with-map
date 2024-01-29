export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  setUserSettings(setting, value) {
    this.userSettings.set(setting, value);
  }

  settings() {
    const currentSettings = this.defaultSettings;
    this.userSettings.forEach((value, key) => {
      currentSettings.set(key, value);
    });
    return currentSettings;
  }
}
