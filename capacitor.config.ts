import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.familystore.fsreport',
  appName: 'FS Report',
  webDir: 'www',
  server: {
    // Points the app directly at the office server. Change this IP if the
    // server's LAN address ever changes.
    url: 'http://192.168.1.204:3001',
    cleartext: true
  }
};

export default config;
