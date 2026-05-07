// components/Modal/Modal.tsx

"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={styles.backdrop} onClick={close}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
