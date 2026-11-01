import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.axoraen.envdesk',
  appName: 'android',
  webDir: 'dist',

  server: {
    url: 'http://192.168.0.7:4200/',
    cleartext: true,
  },
};

export default config;
