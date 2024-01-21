import React, { useState } from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "./Value.css"
import  data from '../../utils/accordion'
const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth  flexCenter v-container">
                
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Values</span>
                    <span className='primaryText'>Values we give to our Client</span>
                    <span className='secondarText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi rem repellat iure <br/> necessitatibus ullam veritatis numquam rerum excepturi, accusamus totam.
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item,id)=>{
                                const [className,setClassName] = useState(null)
                                return(
                                    <AccordionItem
                                        className={`accordion-item ${className}`} key={id} uuid={id}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <AccordionItemState>
                                                    {({expanded})=>
                                                        expanded 
                                                        ?
                                                        setClassName('expanded')
                                                        :
                                                        setClassName('not-expanded')
                                                        }
                                                </AccordionItemState>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className='primaryText'>
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">
                                                {item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
