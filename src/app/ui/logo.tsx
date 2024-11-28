import React from "react";
import Image from "next/image";

const iconSkin = "/Skinn®.svg";

const Logo: React.FC = () =>{
    return(
        <>
            <Image src={iconSkin} alt="My Icon" width={70} height={70} />
        </>
    );

}

export default Logo; 