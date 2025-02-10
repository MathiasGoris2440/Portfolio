import React, {useContext, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { motion } from "motion/react"
import {CursorContext} from "../Components/CursorContext.jsx";
import {useMediaQuery} from "react-responsive";

const gridContainerVariants = {
    hidden: {scale: 0},
    animate: {
        scale: 1,
    }
}

const Contact = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target : {name, value}}) => {
        setForm({...form, [name] : value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_f5g4w5w",
                "template_bw2xhvq",
                {
                    from_name: form.name,
                    message: form.message,
                    to_name: "Mathias",
                    from_email: form.email,
                    to_email: "mathias.goris@outlook.com"
                },
                "GmARFMbp1SPHno9qd"
            )

            setLoading(false);
            alert("Your message has been sent!");

            setForm({
                name: '',
                email: '',
                message: '',
            });
        }
        catch (error) {
            setLoading(false);
            console.log(error)
            alert("Something went wrong!");
        }
    };

    const cursor = useContext(CursorContext);

    const handleMouseEnter = () => {
        if (cursor.current) {
            cursor.current.classList.add("cursor-hover");
        }
    };

    const handleMouseLeave = () => {
        if (cursor.current) {
            cursor.current.classList.remove("cursor-hover");
        }
    };

    return (
        <section className={"c-space my-20"} id={"contact"}>
            <motion.div  variants={gridContainerVariants}
                         initial={"hidden"}
                         whileInView={"animate"}
                         margin={"-800px"}
                         transition={{duration: 1, delay: 0.1}}
                         className={"relative min-h-screen flex items-center justify-center flex-col"}>
                {!isMobile &&
                    <img src={"assets/terminal.png"} alt={"terminal background"} className={"absolute inset-0 min-h-screen"} />
                }

                <div className={"contact-container"}>
                    <h3 className={"head-text"}>Let&#39;s Talk</h3>
                    <p className={"text-lg text-white-600 mt3"}>
                        Whether you&#39;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&#39;m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-8 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type={"text"}
                                name={"name"}
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"John Doe"}
                            />
                        </label>

                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Email</span>
                            <input
                                type={"email"}
                                name={"email"}
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"johndoe@gmail.com"}
                            />
                        </label>

                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your message</span>
                            <textarea
                                name={"message"}
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={"field-input"}
                                placeholder={"Hi, I wanna give you a job..."}
                            />
                        </label>

                        <button className={"field-btn"} type={"submit"} disabled={loading} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src={"assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"} />
                        </button>

                    </form>
                </div>

            </motion.div>

        </section>
    )
}
export default Contact
