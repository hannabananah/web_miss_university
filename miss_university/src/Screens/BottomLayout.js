import React from "react";

import "../Assets/css/bottomLayout.css";
export const BottomLayout = () => {
  return (
    <div id="bottom_root">
      <footer id="footer">
        {/* top */}
        <div className="top">
          <span>이용약관</span>
          <span className="emphasis">개인정보처리방침</span>
          <span>고객센터</span>
          <span>찾아오시는 길</span>
        </div>
        {/* bottom */}
        <div className="bottom">
          <span>주식회사 애니챗</span>
          <address className="address">
            서울시 강남구 선릉로 93길 50 현석타워 8층
          </address>
          <span>대표 : 이승진</span>
          <span>대표번호 : <span className="number">02-6959-3088</span></span>
          <span>법인등록번호 : 110111-7783700</span>
        </div>
        <p className="rights">COPYRIGHT (C) ANYCHAT CORP. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};
