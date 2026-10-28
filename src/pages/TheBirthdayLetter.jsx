import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi, happy birthday!</p>
                    <p>
                        Happy birthday my favourite human! U passed one more chapter in ur life. Congrats babi I'm so proud
                        of you. 
                        I just want to say that I'm genuinely grateful to have u in my life. I know we are far away and we rarely meet in person but I hope u know that I always care about u. I hope u will always be happy, healthy and always be surrounded by lovely people who truly care about u. 
                        Stay alive please, we need to meet and celebrate ur birthday in person. I miss u sm and hope u feel the same. 
                        
                        Again, happy birthday and I hope u have a wonderful year ahead. 
                        
                    </p>
                    <p>
                        
                        
                    </p>
                    <p style={{ textAlign: "right" }}>From NEU to BUV with love,</p>
                    <p style={{ textAlign: "right" }}>Nhi Vũ</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
