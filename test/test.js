import Settings from '../src/script';

describe('testing class Settings', () => {
  let settings;
  beforeEach(() => {
    settings = new Settings();
  });

  it('should set user setings', () => {
    settings.setUserSettings('theme', 'gray');
    const gray = settings.userSettings.get('theme');
    expect(gray).toBe('gray');
  });

  it('should get current settings', () => {
    settings.setUserSettings('theme', 'gray');
    settings.setUserSettings('music', 'pop');
    const result = settings.settings();
    expect([...result.values()]).toEqual(['gray', 'pop', 'easy']);
  });
});
