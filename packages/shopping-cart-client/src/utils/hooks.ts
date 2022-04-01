import { useTranslation } from "react-i18next";

// Get language properties
export function LanguageHook() {
  const { i18n, t } = useTranslation();
  return {
    language: i18n.language,
    t,
  };
}