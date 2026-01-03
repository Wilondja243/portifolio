import { useEffect, useRef } from "react";


export default function useRevealOnScroll(){
    const ref = useRef(null);

    useEffect(()=> {
        const el = ref.current;
        if(!el) return;

        const observer = new IntersectionObserver(
            ([entry]) =>{
                if(entry.isIntersecting){
                    el.classList.add("is-visible");
                    el.classList.add("feature-animated")
                }
            },
            {
                threshold: 0.1
            }
        )
        observer.observe(el);
        return () => observer.disconnect();
    }, [])

    return ref;
}