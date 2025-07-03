import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);

            let attempts = 0;
            const maxAttempts = 30;
            const scrollToElement = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else if (attempts < maxAttempts) {
                    attempts += 1;
                    requestAnimationFrame(() => setTimeout(scrollToElement, 100));
                }
            };
            scrollToElement();
        }
    }, [location]);

    return null;
}

export default ScrollToHash;