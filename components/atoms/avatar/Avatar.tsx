import Image from "next/image";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Avatar = ({
  src,
  alt = "Avatar image",
  width = 80,
  height = 80,
}: AvatarProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={styles.avatar}
  />
);

export default Avatar;
