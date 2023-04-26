import styles from "./Tile.module.css";
import Avatar from "@/components/atoms/avatar/Avatar";
import Link from "@/components/atoms/link/Link";

export interface TileProps {
  href: string;
  title: string;
  author: string;
  imageSrc: string;
}

const Tile = ({ href, title, author, imageSrc }: TileProps) => (
  <div className={styles.tile}>
    <Link href={href}>
      <div className={styles.container}>
        <Avatar src={imageSrc} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
    </Link>
  </div>
);

export default Tile;
