import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/01b9ad0ac1fe2126dfe49a92dbf368af~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709186400&x-signature=A75mAHe%2B1KniqJzpfupI%2FH1%2B1Vg%3D"
        alt="hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Dao Le Phuong Hoa</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>daolephuonghoa</span>
      </div>
    </div>
  );
}

export default AccountItem;
