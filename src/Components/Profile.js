import React from 'react'
import { Icon } from '@iconify/react';
import "./Profile.css"

const Profile = ({ setShowProfile }) => {
    return (
        <div id="Profile">
            <div className='back-btn' onClick={() => setShowProfile(false)}>BACK</div>
            <div className='profile-photo'>
                <img src={require("../Asserts/IMG_20230805_221509-(1)-(1).png")} alt='profile' className='profile-photo-inner'/>
            </div>
            <div className='profile-details'>
                <div className='profile-details-inner'>
                    <div className='profile-name'>VIGNESHWAR J</div>
                    <div className='profile-email'>
                        <Icon icon="ic:round-email" />
                        <a href='mailto:cgt.vigneshwar@gmail.com'>cgt.vigneshwar@gmail.com</a>
                    </div>
                    <div className='profile-number'>
                        <Icon icon="ic:sharp-phone" />
                        <a href="tel:+91 8110909191">8110909191</a>
                    </div>
                    <div className='icons'>
                        <a href='https://github.com/jvigneshwar' className='github'>
                            <Icon icon="mdi:github" />
                        </a>
                        <a href='https://www.linkedin.com/in/vigneshwar-j-1b57021b1/' className='linked-in'>
                            <Icon icon="uil:linkedin" />
                        </a>
                        <a href='https://www.instagram.com/cgtamizhan/?next=%2F' className='insta'>
                            <Icon icon="mdi:instagram" />
                        </a>
                        <a>
                            <Icon icon="mdi:instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile