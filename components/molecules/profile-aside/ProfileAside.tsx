import Image from "next/image";
import styles from "./ProfileAside.module.css";
import Link from "next/link";

interface ProfileAsideProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  author: string;
  description: string;
  profileSlug: string;
}

const ProfileAside = ({
  imageSrc,
  imageAlt = "Profile image",
  title,
  author,
  description,
  profileSlug,
}: ProfileAsideProps) => (
  <aside className={styles.aside}>
    <Link href={profileSlug}>
      <Image src={imageSrc} alt={imageAlt} width={268} height={268} />
    </Link>
    <Link href={profileSlug} className={styles.titleLink}>
      <div className={styles.block}>
        <h3>{title}</h3>
        <span>By {author}</span>
      </div>
    </Link>
    <div className={styles.block}>
      <h4>Description:</h4>
      <span>{description}</span>
    </div>
  </aside>
);

export default ProfileAside;
