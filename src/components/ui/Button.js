import { useEffect, useState } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({
    type,
    text,
    setClose,
}) => {

    const [element, setElement] = useState('');

    const changeElemenetHandler = () => {
        if (type === 'back') {
            setElement(
                <div onClick={() => setClose('none')} className={styles.backBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_194_3126)">
                            <path d="M12 15.2885L12.6885 14.6L10.5885 12.5H15.5V11.5H10.5885L12.6885 9.4L12 8.71152L8.71152 12L12 15.2885ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21Z" fill="#EB455F" />
                        </g>
                    </svg>

                    <span>{text}</span>
                </div>
            );
        }
    }

    useEffect(() => {
        changeElemenetHandler();
    }, []);

    return element
};

export default Button