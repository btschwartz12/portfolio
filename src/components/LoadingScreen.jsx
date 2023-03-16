import React, { useEffect, useState } from "react";
import { Flip } from "react-reveal";

const styles = {
    container: {
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        transition: "opacity 0.5s ease-out",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        
    },
    logo: {
        width: "20%",
        margin: "0 auto",
        marginBottom: '20%',
    },
};

const LoadingScreen = ({ onFinishLoading }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false);
        }, 1750);

        return () => {
        clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
        onFinishLoading();
        }, 2250);

        return () => {
        clearTimeout(timer);
        };
    }, [onFinishLoading]);




    return (
        <div
        style={{
            ...styles.container,
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? "auto" : "none",
        }}
        >
            <Flip left>
            <div style={styles.logo}>
                {/* <img src="/public/logo.svg" alt="loading dog" /> */}
                <img src="/public/logo.svg" alt="loading dog" />
            </div>
            </Flip>
        </div>
    );
};

export default LoadingScreen;
