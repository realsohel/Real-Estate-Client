import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Properties.css"
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import ResidencyCard from '../../components/Residiencies/ResidencyCard'

const Properties = () => {
    const {data,isError,isLoading} = useProperties()
    
    if(isError){
        return (
        <div>
            <div className="wrapper">
                <span>Error while fetching the data.</span>
            </div>
        </div>
    )}

    if(isLoading){
        return(
            <div>
                <div className="wrapper flexCenter" style={{height:"60vh"}}>
                    <PuffLoader
                        height="80"
                        width="80"
                        radius={1}
                        color='#4066ff'
                        aria-label='puff-loading'
                    />
                </div>
            </div>
        )
    }
    return (
        <div className='wrapper'>
            <div className="innerWidth paddings flexColCenter p-container">
                <SearchBar/>

                <div className="paddings flexCenter properties">
                    {
                        data.map((card,i)=>{
                            return(
                                <ResidencyCard card={card} key={i}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Properties
