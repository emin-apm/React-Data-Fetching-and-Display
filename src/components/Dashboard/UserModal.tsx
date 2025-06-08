import type { User } from "../../types/types";
import styles from "./DashboardStyles.module.css";
import { useEffect } from "react";

type UserModalProps = {
  user: User;
  onClose: () => void;
};

export default function UserModal({ user, onClose }: UserModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.userName}>
          <h2>{user.name}</h2>
          <span>{user.username}</span>
        </div>
        <div className={styles.userInfo}>
          <h3>Connection</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
        <div className={styles.userInfo}>
          <h3>Address</h3>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city} - {user.address.zipcode}
          </p>
          {user.address.geo && (
            <p>
              Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}
            </p>
          )}
        </div>
        <div className={styles.userInfo}>
          <h3>Company</h3>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
