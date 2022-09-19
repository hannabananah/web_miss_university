import React, { createContext, useState } from "react";
import { Platform, NativeModules } from "react-native";
import _ from "lodash";
import { language_list } from "~/Util/languageList";

const LanguageContext = createContext();
const language_ctx_ref = React.createRef();

export const context_ui = {};

export const get_language = () => {
  return language_ctx_ref.current.language;
};

export const set_language = (language) => {
  console.log("set_language ::: ", language);
  language_ctx_ref.current.setLanguage(language);
};

const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const [device_lan] =
  Platform.OS === "android"
    ? deviceLanguage.split("_")
    : deviceLanguage.split("-");

context_ui.language =
  _.findIndex(language_list, (o) => o.code == device_lan) >= 0
    ? device_lan
    : "en";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(context_ui.language);
  console.log("LanguageProvider ::: ", language);

  language_ctx_ref.current = {
    language,
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={language_ctx_ref.current}>
      {children}
    </LanguageContext.Provider>
  );
};

export const sort_lan_list = (code) => {
  let ret = _.cloneDeep(language_list);
  const src_idx = _.findIndex(language_list, (o) => o.code == code);

  if (src_idx < 0) return ret;

  const tmp = _.cloneDeep(ret[src_idx]);
  ret.splice(src_idx, 1);
  ret.unshift(tmp);

  return ret;
};

export default LanguageContext;
