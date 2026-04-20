# MobileCore React Native App

Expo + React Native + TypeScript ile hazırlanmış, modüler ve ölçeklenebilir başlangıç altyapısı.

## Öne Çıkan Özellikler

- `src` merkezli temiz ve kurumsal klasör yapısı
- Modül bazlı mimari: `modules/home`, `modules/profile`, `modules/settings`
- Ortak katmanlar: `common/components`, `common/services`, `common/utils`, `common/types`
- Alt tab navigasyon + `lucide-react-native` ikonlar
- Açık tema + tema token yapısı (`colors`, `spacing`, `typography`, `radius`, `shadows`)
- Türkçe içerik + `i18next` tabanlı i18n altyapısı
- `axios` ile merkezi HTTP client ve standart hata modeli
- `zustand` global state başlangıcı
- `react-hook-form` + `zod` form validasyon örneği
- Test/Lint kalite hattı: Jest, ESLint, Prettier, Husky, Commitlint

## Kurulum

```bash
npm install
cp .env.example .env
```

## Çalıştırma

```bash
npm run start
```

Platform bazlı:

```bash
npm run android
npm run ios
npm run web
```

## Geliştirme Komutları

```bash
npm run typecheck
npm run lint
npm run format
npm run test
```

## Ortam Değişkenleri

`.env` dosyasında:

```env
EXPO_PUBLIC_APP_ENV=development
EXPO_PUBLIC_API_BASE_URL=https://api.example.com
EXPO_PUBLIC_ENABLE_LOGGING=true
```

---

Hazır, sade ve profesyonel bir temel mimari: yeni modüller doğrudan `src/modules` altında bağımsız şekilde geliştirilebilir.
