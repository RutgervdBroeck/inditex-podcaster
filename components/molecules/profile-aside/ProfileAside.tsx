import Image from "next/image";
import styles from "./ProfileAside.module.css";

interface ProfileAsideProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  author: string;
  description: string;
}

const ProfileAside = ({
  imageSrc,
  imageAlt = "Profile image",
  title,
  author,
  description,
}: ProfileAsideProps) => (
  <aside className={styles.aside}>
    <Image src={imageSrc} alt={imageAlt} width={268} height={268} />
    <div className={styles.block}>
      <h3>{title}</h3>
      <span>By {author}</span>
    </div>
    <div className={styles.block}>
      <h4>Description:</h4>
      <span>{description}</span>
    </div>
  </aside>
);

export default ProfileAside;
