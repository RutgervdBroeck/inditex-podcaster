import styles from "@/styles/Index.module.css";
import SearchBox from "@/components/molecules/search-box/SearchBox";

const Home = () => (
  <div className={styles.index}>
    <div className={styles.searchBoxContainer}>
      <SearchBox />
    </div>
  </div>
);

export default Home;
