import styles from "../main/Faq.module.css"

function Faqs(props) {
  let { hanlder, visible, itemNumber, title, content } = props;

  return (
      <div className="faq">
      <div onClick={() => hanlder(itemNumber)} className="question fs-2 fw-bold pointer w-fit">{title}</div>
      {visible === itemNumber ? <p className={` ${styles.answer} fs-2 `}>{content}</p> : null}
      </div>
  );
}

export default Faqs;



