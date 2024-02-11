import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/ui/Button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export enum Languages {
  EN = "en",
  RU = "ru",
}

export const LangSwitcher = () => {
  //   const [lang, setLang] = useState<Languages>(Languages.RU);
  const { t, i18n } = useTranslation();
  const toggleLang = async () => {
    i18n.changeLanguage(
      i18n.language === Languages.RU ? Languages.EN : Languages.RU
    );
  };
  return (
    <Button onClick={toggleLang} theme={ButtonTheme.CLEAR}>
      {t("language")}
    </Button>
  );
};
