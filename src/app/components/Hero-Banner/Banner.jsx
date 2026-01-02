"use client";
import React from 'react'
import "@/app/components/Hero-Banner/Banner.css";
import { motion } from "framer-motion";

function Banner() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <h1>
                            Hi,<br />
                            <span> I’m Shlesha Joshi</span>
                        </h1>

                        <p>
                            Enrich a digital solution that offers several services.
                            We help you build scalable and modern digital products.
                        </p>

                        <button className="cta-btn">Let's Connect →</button>
                    </div>

                    {/* <div className="hero-image">

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            style={{
                                width: "290px",
                                height: "290px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                            }}
                        >
                            <img src="/images/sj-logo.png" alt="Hero"  />
                        </motion.div>


                    </div> */}
                    <div className="hero-image" style={{ position: "relative" }}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                boxShadow: "0 0 30px 10px rgba(108, 99, 255, 0.7), 0 0 60px 20px rgba(108, 99, 255, 0.4)",
                            }}
                            style={{
                                width: "290px",
                                height: "290px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.15)", // normal shadow
                                transition: "box-shadow 0.3s ease",
                            }}
                        >
                            <img
                                src="/images/sj-logo.png"
                                alt="Hero"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </motion.div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Banner