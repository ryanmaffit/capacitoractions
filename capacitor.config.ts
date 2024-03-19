import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.maffit.capacitoractions',
  appName: 'Capacitor Actions',
  webDir: 'dist/capacitor-actions/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
