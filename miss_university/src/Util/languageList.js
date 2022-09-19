export const language_list = [
  {
    id: 1,
    name: "한국어",
    code: "ko",
    lan_code: "ko",
  },
  {
    id: 2,
    name: "English",
    code: "en",
    lan_code: "en",
  },
  {
    id: 3,
    name: "简体中文",
    code: "zh-CN",
    lan_code: "cn",
  },
  {
    id: 14,
    name: "繁體中文",
    code: "zh-TW",
    lan_code: "tw",
  },
  {
    id: 4,
    name: "日本語",
    code: "ja",
    lan_code: "jp",
  },
  {
    id: 5,
    name: "русский",
    code: "ru",
    lan_code: "ru",
  },
  {
    id: 6,
    name: "Deutsch",
    code: "de",
    lan_code: "de",
  },
  {
    id: 7,
    name: "français",
    code: "fr",
    lan_code: "fr",
  },
  {
    id: 8,
    name: "español",
    code: "es",
    lan_code: "es",
  },
  {
    id: 9,
    name: "العربية",
    code: "ar",
    lan_code: "ar",
  },
  {
    id: 10,
    name: "Indonesia",
    code: "id",
    lan_code: "id",
  },
  {
    id: 11,
    name: "Tiếng Việt",
    code: "vi",
    lan_code: "vi",
  },
  {
    id: 12,
    name: "ไทย",
    code: "th",
    lan_code: "th",
  },
  {
    id: 13,
    name: "Tagalog",
    code: "tl",
    lan_code: "tl",
  },
];

export const languageNameFromCode = (lan) => {
  const lang = language_list.filter((i) => i.lan_code === lan);
  return lang[0]?.name;
};
