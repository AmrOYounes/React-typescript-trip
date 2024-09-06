import { FC } from "react";
import "./index.scss";
const styles = {
  listItem: {
    textDecoration: "none",
    fontSize: 20,
    //  color: 'red',
  },
};

interface IProps {
  companyName: string;
  aboutUs: string;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

// export const Navbar =  ({companyName, aboutUs}: IProps ) => {

export const Navbar: FC<IProps> = ({
  companyName,
  aboutUs,
  isLogged,
  setIsLogged,
}) => {
  return (
    <>
      <nav>
        <ul className="navbar-list">
          <li>
            <a style={styles.listItem} href="/">
              {companyName}
            </a>
          </li>
          <li>
            <a style={styles.listItem} href="/">
              Home
            </a>
          </li>
          <li>
            <a style={styles.listItem} href="/">
              {aboutUs.toUpperCase()}
            </a>
          </li>
          <li>
            <a style={styles.listItem} href="/">
              Contact
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setIsLogged(!isLogged);
              }}
            >
              {isLogged ? "logout" : "login"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
