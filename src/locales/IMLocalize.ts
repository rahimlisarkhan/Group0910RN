import { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import 'intl-pluralrules';

import en from './en.json';
import az from './az.json';
import i18next from 'i18next';
import LocalStorage from '../store/localStorage';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (cb) => {
    const storedLang = await LocalStorage.getItem('localization');

    if (storedLang) {
      cb(storedLang);
      return;
    }

    const [lang] = RNLocalize.getLocales();
    const langCode = lang.languageCode;
    let systemLang = 'en';

    if (langCode == 'tr' || langCode == 'az') {
      systemLang = 'az';
    }

    cb(systemLang);
    LocalStorage.setItem('localization', systemLang);
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    LocalStorage.setItem('localization', language);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'az',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      az: {
        translation: az,
      },
    },
  });
