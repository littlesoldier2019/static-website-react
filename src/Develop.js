import React from 'react';
import './Develop.css';


function DesignTab(props) {
       return (
        <button className='btn design-btn'onClick={props.handleClicked}>
                <div className='design'>
                <h3><span className="normal">DESIGN</span></h3>
                </div>
        </button>
       ) 
}

function ProductTab(props) {
        return (
         <button className='btn product-btn' onClick={props.handleClicked}>
                 <div className='production'>
                 <h3><span className="normal">PRODUCTION</span></h3>
                 </div>
         </button>
        ) 
 }

function DesignText(props) {
        
        return (
                <div className="container_second--text"> 
                        <h2><span className="normal">Design</span></h2>
                        <p className="normal">Praesentium iure repellendus corrupti ab
                        unde, aliquam possimus similique esse. Incidunt inventore
                        similique eveniet.<br/>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Adipisci magni tenetur nobis
                        velit quasi sequi quod. Praesentium iure repellendus corrupti ab
                        unde, aliquam possimus similique esse. Incidunt inventore
                        similique eveniet.</p>
                        <button className="readmore_btn"> READ MORE </button>
                </div>            
        )      
}

function ProductText(props) {
        
        return (
                <div className="container_second--text"> 
                        <h2><span className="normal">Production</span></h2>
                        <p className="normal">Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Adipisci magni tenetur nobis
                        velit quasi sequi quod. Praesentium iure repellendus corrupti ab
                        unde, aliquam possimus similique esse.<br/> Incidunt inventore
                        similique eveniet. Praesentium iure repellendus corrupti ab
                        unde, aliquam possimus similique esse. Incidunt inventore
                        similique eveniet.</p>
                        <button className="readmore_btn"> READ MORE </button>
                </div>            
        )
}

function DisplayText(props) {
        if (!props.isClicked) {
                return (
                        <div className="container_third_itemd">
                                <DesignText /> 
                        </div>
                )
        }
        
        return (
                <div className="container_third_itemd">
                        <ProductText /> 
                </div>
        )
}


class Develop extends React.Component {
        constructor(props) {
                super(props);
                this.handleClicked = this.handleClicked.bind(this);
                this.state = {isClicked:false};
        }

        handleClicked() {
                this.setState(prevState => ({
                        isClicked: !prevState.isClicked
                }));
        }

        render() {
                const isClicked = this.state.isClicked;
                              
                return (
                        <div className="container_third--development">
                                <div className="container_third_development--nav">
                                        <button className='btn design-btn' onClick={this.handleClicked}>
                                                <div className="design">
                                                        <h3><span className="normal">DESIGN</span></h3>
                                                </div>
                                        </button>

                                         <button className='btn product-btn'onClick={this.handleClicked}>
                                                <div className="production">
                                                        <h3><span className="normal">PRODUCTION</span></h3>
                                                </div>
                                        </button>
                                </div>                        

                                <DisplayText isClicked={isClicked}/>                       
                        </div>
                )
        }
}

// const Develop = () => {
//     return (
//         <div className="container_third--development">
//                 <div className="container_third_development--nav">
//                         <button className='link-style'>
//                                 <div className="design">
//                                         <h3><span className="normal">DESIGN</span></h3>
//                                 </div>
//                         </button>

//                         <button className='link-style'>
//                                 <div className="production">
//                                         <h3><span className="normal">PRODUCTION</span></h3>
//                                 </div>
//                         </button>
//                 </div>

//                 <div className="container_third_itemd">

//                         <div className="container_second--text"> 
//                                 <h2><span class="normal">Design</span></h2>
//                                 <p className="normal">Lorem ipsum dolor sit
//                                 amet consectetur adipisicing elit. Adipisci magni tenetur nobis
//                                 velit quasi sequi quod. Praesentium iure repellendus corrupti ab
//                                 unde, aliquam possimus similique esse. Incidunt inventore
//                                 similique eveniet.</p>
//                         </div>
//                         <div className="container_second--text"> 
//                                 <h2><span class="normal">Production</span></h2>
//                                 <p className="normal">Lorem ipsum dolor sit
//                                 amet consectetur adipisicing elit. Adipisci magni tenetur nobis
//                                 velit quasi sequi quod. Praesentium iure repellendus corrupti ab
//                                 unde, aliquam possimus similique esse. Incidunt inventore
//                                 similique eveniet.</p>
//                         </div>
                        
//                 </div>

//                 <button className="readmore_btn"> READ MORE </button>

//         </div>
//     )
// }

export default Develop;