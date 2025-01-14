import React from 'react'
import './HeroComponent2.css'
import TitleComponent from '../TitleComponent/TitleComponent'
export default function HeroComponent2({ image, head, disc, light, bool }) {
    return (
        <>
            <div className=' pb-150 Af-HeroComponent2-father'>
                <div 
                className=' Af-HeroComponent2' 
                data-aos="zoom-in" 
                data-aos-duration="2000">
                    <div 
                    data-aos="zoom-in" 
                    data-aos-duration="2000"
                    className={bool ? 'Af-HeroComponent2-heading-about' : 'Af-HeroComponent2-heading'}>
                        {bool && <h4 className='Af-About-h4'>Welcome to YourBank</h4>}
                        <TitleComponent
                            title={head}
                            desc={disc}
                            highlightedWords={[light]}
                            fw={false}
                        />
                    </div>
                    <img 
                    src={image} 
                    alt="HeroImg" 
                    data-aos="zoom-in" 
                    data-aos-duration="2000" />
                </div>
            </div>
        </>
    )
}
