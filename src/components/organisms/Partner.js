import React from "react";
import PartnerContent from "../molecules/PartnerContent";
import "./Partner.css";
import image1 from "../../assets/banner.png";

export default function Partner() {
    return (
        <section className="partner-wrapper">
            <PartnerContent
                title="List your Properties on Homelengo, join Us Now!"
                text="List your Properties
                 on OpenRoof, 
                 join Us Now!"
                button="Become A Host"
            />

            <div className="partner-image">
                <img src={image1} alt="House" />

            </div>
        </section>
    );
}
