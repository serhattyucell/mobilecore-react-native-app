import { SettingItem } from '../interfaces/settings.interfaces';

export function getSettingItems(): SettingItem[] {
  return [
    {
      title: 'Tema',
      description: 'Uygulama varsayılan olarak açık temada çalışır.',
    },
    {
      title: 'Mimari',
      description: 'Modüller bağımsızdır ve kolayca genişletilebilir.',
    },
  ];
}
