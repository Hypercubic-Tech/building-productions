import { useEffect, useState } from "react"
import styles from "./Faq.module.css"
import axios from "axios";

const faqData = [
    {
        questions: "question",
        answer: "answer",
    },
    {
        questions: "question",
        answer: "answer",
    },
    {
        questions: "question",
        answer: "answer",
    },
    {
        questions: "question",
        answer: "answer",
    },
];



const Faq = () => {
    const [active, setActive] = useState(null);
    const [faqs, setFaqs] = useState(null);

    
    useEffect(() => {
        const faqRequest = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/FAQs`);
                const data = response.data;
                setFaqs(data?.data);
            } catch (error) {
                console.error(error);
            }
        };
        faqRequest();
    }, []);

    return(
        <div className={styles.bodyContainer}>
            <h1 className={styles.h1}>Faq</h1>
            <div className={styles.faq__list}>
                { faqs && faqs?.map((item, index) => {
                    console.log(item?.attributes.question)
                    return (
                        <div className={styles.faq__item}>
                            <div className={styles.faq__questions} onClick={() => {
                                if ( index === active) {
                                    setActive(null);
                                } else {
                                    setActive(index);
                                }
                            }} key={index} >
                                {item?.attributes?.question}
                                <div className={styles.plass} key={index + 1} >{active === index ? "-" : "+"}</div>
                            </div>
                            <div className={styles.faq__answers} style={{display: active === index ? "block" : "none" }} key={index + 2}>{item?.attributes?.answer}</div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default Faq;