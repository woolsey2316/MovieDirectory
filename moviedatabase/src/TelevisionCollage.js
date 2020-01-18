import React, {Component} from 'react';
import Style from './css/hometile.module.css';

class TelevisionCollage extends Component {
    constructor(props) {
        super(props);
        this.state={showList : this.props.showList, collage:[]};

       let show = this.state.showList[0]

        this.state.collage.push( 
            <div className={Style.nonExpandingContainerMajor}>
                <div className={Style.flexGridWholeRow}
                style={{
                        backgroundImage:`url(${show.poster_src})`,
                        backgroundSize: 'cover',
                    }}>
                <h3 className={Style.title} onClick={this.viewTelevision.bind(this)}>{show.name}</h3>
                </div>
            </div>
        )

        for (let i = 1; i < 3; i++) {
            let show = this.state.showList[i];

            this.state.collage.push( 
                <div className={Style.nonExpandingContainerMinor}>
                    <div className={Style.flexGridHalves}
                    style={{
                        backgroundImage:`url(${show.poster_src})`,
                        backgroundSize: 'cover',
                    }}>
                    <h3 className={Style.title} onClick={this.viewTelevision.bind(this)}>{show.name}</h3>
                    </div>
                </div>
            )
        }
    }

    viewTelevision() {
        console.log("Trying to view tv show")
        const url = "https://www.themoviedb.org/tv/" + this.props.show.id
        window.location.href = url
    }

    render() {
        return (
            <div className={Style.tvContainer}>
            <h3 style={{marginTop:'10px'}}>On TV</h3>
                {this.state.collage}
            </div>
            
        )
    }
}

export default TelevisionCollage;