import React from "react";

interface Props {
    bgColor: string;
}

const Square: React.FC<Props> = ({bgColor}) => {
    return <div className="Square" style={{backgroundColor: bgColor}}></div>
}

export default Square;