import React ,{Component} from 'react'


class Card extends Component {
//this.props.songs 
    render(){
        return <div>name</div>
    }
}


const mapStateToProps=(state)=>{//takes our state obkect and makes it accessible to the ocmponent as eprops
console.log(state);

return {
    songs:state.songs
};
}

export default connect(mapStateToProps)(Card);