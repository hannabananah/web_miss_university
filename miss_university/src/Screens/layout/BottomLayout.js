import React from "react";

import "../../assets/css/bottomLayout.css";
import "../../assets/css/responsive/bottom.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const BottomLayout = () => {
  const { t } = useTranslation();
  return (
    <div id="bottom_root">
      <footer id="footer">
        {/* top */}
        <div className="top">
          <span>{t("terms_and_conditions")}</span>
          <span className="emphasis">{t("privacy_policy")}</span>
          <span>{t("customer_service")}</span>
          <span>{t("visit_us")}</span>
        </div>
        {/* bottom */}
        <div className="bottom">
          <span>{t("anychat_corp")}</span>
          <address className="address">{t("address")}</address>
          <span>{t("president")}</span>
          <span>
            {t("phone")} : <span className="number">02-6959-3088</span>
          </span>
          <span>{t("registrationNum")} : 110111-7783700</span>
        </div>
        <p className="rights">
          COPYRIGHT (C) ANYCHAT CORP. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};
