import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      <p>Welcome to HomePage!</p>
      <div style={{ height: "3000px" }}></div>
      <Image
        src="/dog.jpg"
        alt="A cute dog"
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <Image
        src="https://fastly.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ"
        alt="test"
        width={300}
        height={300}
      
    />
    </div>
  );
}
