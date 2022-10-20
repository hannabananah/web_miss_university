import React from "react";

import "../../Assets/css/bottomLayout.css";
import "../../Assets/css/responsive/bottom.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const BottomLayout = () => {
  const { t } = useTranslation();
  return (
    <div id="bottom_root">
      <footer id="footer">
        {/* top */}
        <div className="top">
          <span>
            <a
              href="https://www.anychat.com/sub_guide/agree.php"
              target="_blank"
            >
              {t("terms_and_conditions")}
            </a>
          </span>
          <span className="emphasis">
            <a
              href="https://www.anychat.com/sub_guide/privacy.php"
              target="_blank"
            >
              {t("privacy_policy")}
            </a>
          </span>
          <span>
            <a
              href="https://www.anychat.com/sub_customer/qna.php"
              target="_blank"
            >
              {t("customer_service")}
            </a>
          </span>
          <span>
            <a
              href="https://www.anychat.com/sub_company/?goLink=location"
              target="_blank"
            >
              {t("visit_us")}
            </a>
          </span>
        </div>
        {/* bottom */}
        <div className="bottom">
          <span>{t("anychat_corp")}</span>
          <address className="address">{t("address")}</address>
          <span>{t("president")}</span>
          <span>
            {t("phone")} :
            <span className="number">
              <a href="tel:02-6959-3088">02-6959-3088</a>
            </span>
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
