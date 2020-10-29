import React from 'react'
import logo from '../images/live.webp'

export default function Home(){
    return (
        <div style={{display: "flex", flex: 1, backgroundColor: 'black', height: '100%'}}>
            <div style={{display: 'flex', flex:1, flexDirection: 'column'}}>
                <div style={{display: 'flex', flex:0.1, flexDirection: 'row'}}>
                    <div style={{flex: 1,  backgroundColor: '#fef'}}>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', height: '100%'}}>a</div>
                    </div>
                </div>
                <div style={{display: 'flex', flex:1, flexDirection: 'row'}}>
                    <div style={{display: "flex", flex: 0.1,  backgroundColor: '#eef'}}>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center', overflowY: 'scroll', height: '100%'}}>
                            <img src={logo} width="60%" style={{paddingBottom: 30}}></img>
                            <img src={logo} width="60%" style={{paddingBottom: 30}}></img>
                            <img src={logo} width="60%" style={{paddingBottom: 30}}></img>
                            <img src={logo} width="60%" style={{paddingBottom: 30}}></img>
                            <img src={logo} width="60%" style={{paddingBottom: 30}}></img>
                            
                        </div>
                    </div>
                    <div style={{flex: 1, backgroundColor: 'grey'}}>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'row', textAlign: 'center'}}>a</div>
                    </div>
                </div>
            </div>
        </div>
    )
} 