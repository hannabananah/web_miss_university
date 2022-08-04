import "../Assets/css/common.css";
import "../Assets/css/topLayout.css";
import { ReactComponent as Logo } from "../Assets/images/logo.svg";
export const TopLayout = () => {
  return (
    <div className="root">
      <div className="wrapper">
        <div className="header">
          <div className="left">
            <Logo className="logo" />
          </div>
          <div className="right">
            <span>애니챗 HOME</span>
            <span>월드 미스 유니버시티 HOME</span>
            <span>언어 설정</span>
          </div>
        </div>
      </div>
    </div>
  );
};
