import styles from "./Modal.module.scss";
import Badge from "../Badge/Badge";
import { useModal } from "../../hooks/useModal/useModal";
import Heading from "../Heading/Heading";
export default function Modal() {
  const { isOpen, data, loading, error, modalData, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div
      className={styles.modal}
      data-testid="modal"
      role="dialog"
      onClick={closeModal}
    >
      <div
        className={styles.modal__sidebar}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modal__close} onClick={closeModal} />

        {loading && <p className={styles.modal__loading}>Loading...</p>}
        {error && <p className={styles.modal__error}>Error: {error}</p>}

        {!loading && !error && modalData && data && (
          <div className={styles.modal__content}>
            <Badge variant={modalData.onTrack ? "on" : "off"}>
              {modalData.isOnTrackText}
            </Badge>

            <Heading title={data.title} />

            <p className={styles.modal__description}>
              {modalData.onTrack
                ? data.onTrackDescription
                : data.offTrackDescription}
            </p>

            <div className={styles.modal__details}>
              {data.details.map((detail, index) => (
                <div key={index} className={styles.modal__detail}>
                  <h4 className={styles.modal__detailTitle}>{detail.title}</h4>
                  <p className={styles.modal__detailDescription}>
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
