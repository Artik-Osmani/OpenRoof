import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function PartnerContent({ title, text, button }) {
    return (
        <div className="partner-content">
            <span className="partner-subtitle">BECOME PARTNERS</span>

            <Title text={title} className="partner-title" />

            <Text text={text} className="partner-text" />

            <Button text={button} className="partner-btn" />
        </div>
    );
}
