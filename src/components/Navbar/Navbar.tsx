import { NavbarItems } from "../../assets/NavItems";
import { SlBell, SlMenu } from "react-icons/sl";

import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={`navbar navbar-expand-lg ${styles.homeContainer}`}>
        <span className="mx-2">
          {NavbarItems.map((item) => {
            return (
              <span key={item.item}>
                {item.item} {item.seperator}
              </span>
            );
          })}
        </span>
        <div className={styles.rightNavItems}>
          <div>
            <input
              className={styles.searchBar}
              type="text"
              name="search-item"
              placeholder="Search anything"
            />
          </div>
          <div>
            <select name="sample" className={styles.selectMenu}>
              <option value="">Sample 1</option>
              <option value="">Sample 2</option>
            </select>
          </div>
          <div className={styles.icon}>
            <SlBell size="20" />
          </div>
          <div className={styles.profile}>
            <SlMenu size="20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
