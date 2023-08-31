import styles from "../main/Faq.module.css"

function Faqs(props) {
  let { hanlder, visible, itemNumber, question, answer } = props;

  return (
    <div className="faq">
      <div onClick={() => hanlder(itemNumber)} className="relative justify-content-between d-flex align-items-center w-100 question fs-2 fw-bold pointer w-fit">
        <div className={`${styles.borderBottom} w-100`}>{question}</div>
        <svg className={` ${styles.faqArrow} ${visible === itemNumber ? styles.rotate : ""}`} width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00016 7.00016L0.333496 0.333496L13.6668 0.333496L7.00016 7.00016Z" fill="#4C5481" />
        </svg>
      </div>
      <div className={`${visible === itemNumber ? styles.active : ""} ${styles.answer} fs-2 `}>{answer}</div>
    </div>
  );
}

export default Faqs;



