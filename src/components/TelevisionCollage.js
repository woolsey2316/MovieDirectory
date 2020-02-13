import React, {Component} from 'react';
import Style from '../css/hometile.module.css';
import Tile from './Tile'

class TelevisionCollage extends Component {
    constructor(props) {
        super(props);
        
        this.state={showList : this.props.showList, collage:[]};
        let show = this.state.showList[0]
        // The first television show is the main tile and occupies larger space
        this.state.collage.push( 
            <Tile show={show} type="main" showType="tv"/>
        )
        /*
        The second and third television show backdrop is the minor tile and takes up less space
        */              
        for (let i = 1; i < 3; i++) {
            let show = this.state.showList[i];
            this.state.collage.push( 
                <Tile show={show} type="secondary" showType="tv"/>
            )
        }
    }
    render() {
        return (
            <div className={Style.tvContainer}>
            <h3 style={{marginTop:'10px',
                textAlign: 'left',
                fontSize: '1.2rem',
                fontFamily: 'Lato'
            }}>
                On TV
            </h3>
            {this.state.collage}
            </div>
        )
    }
}

export default TelevisionCollage;