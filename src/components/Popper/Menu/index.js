import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      visible
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
