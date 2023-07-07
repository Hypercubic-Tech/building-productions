import { useState } from "react"
import Faqs from "../ui/Faqs";

// import axios from "axios";

import styles from "./Faq.module.css"

const Faq = () => {
    // const [faqs, setFaqs] = useState(null);

    // useEffect(() => {
    //     const faqRequest = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/FAQs`);
    //             const data = response.data;
    //             setFaqs(data?.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     faqRequest();
    // }, []);

    const [visible, setVisible] = useState(null);

    let items = [
      {
        itemNumber: 1,
        title: "როგორ ვისარგებლოთ ამ სერვისით?",
        content: "ლორემ იპსუმ რომლითაც პასპორტით დაუგდებს თითონაც პრისი,ნაჭრითა ქალაქებში იტრიალებს. გაიცინე მოხუცის გაზრდილ დაგუბებულინიშნობაში ცეცხლი. სამყაროსათვის შესასვლელს გადმონაშთო,პასპორტით უგვანობა მიმართლებდა ქალაქებში პირადად პიესისმონაწილეობას დათრგუნულმა ქართლიც",
      },
    ];
  
    let hanlder = (num) => {
      if (visible === num) {
        setVisible(null);
      } else {
        setVisible(num);
      }
    };
  

    return (
        <div className="container">
            <div className="d-flex w-100">
        <div className="container">
        <h3 className={`${styles.borderBottom} m-color fs-2hx fw-bold mb-5 georgian`}>
                    ხშირად დასმული კითხვები
        </h3>
        {items.map((item) => {
            return (
          <Faqs
            visible={visible}
            hanlder={hanlder}
            itemNumber={item.itemNumber}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
                <div className="w-50 relative">
            <img className="faq-bg" src="/images/faq.png" alt="faq"/>
                </div>
            </div>
        </div>

        // <div className={styles.bodyContainer}>
        //     <h1 className={styles.h1}>Faq</h1>
        //     <div className={styles.faq__list}>
        //         {faqs && faqs?.map((item, index) => {
        //             return (
        //                 <div key={index} className={styles.faq__item}>
        //                     <div className={styles.faq__questions} onClick={() => {
        //                         if (index === active) {
        //                             setActive(null);
        //                         } else {
        //                             setActive(index);
        //                         }
        //                     }} key={index} >
        //                         {item?.attributes?.question}
        //                         <div className={styles.plass} key={index + 1} >{active === index ? "-" : "+"}</div>
        //                     </div>
        //                     <div className={styles.faq__answers} style={{ display: active === index ? "block" : "none" }} key={index + 2}>{item?.attributes?.answer}</div>
        //                 </div>
        //             );
        //         })
        //         }
        //     </div>
        // </div>
    )
}

export default Faq;