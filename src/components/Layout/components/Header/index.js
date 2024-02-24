import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

console.log(images.logo);
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          {/* Clear Button*/}
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* Search Button */}
          <button className={cx("search-btn")}></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
