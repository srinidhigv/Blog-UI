import React from 'react'
import { connect} from 'react-redux'


class PostsShowRedux extends React.Component{


 
    render()
    {
        return (
            <div>
            <h2>Posts show </h2>
            {this.props.posts &&
            (<div>
                <h3>Title</h3>
                <p>{this.props.posts.title}
                <h3>Body</h3> 
                {this.props.posts.body}</p>
            </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    return {
        posts: state.posts.find(post => post.id == props.match.params.id),
    }
}


export default connect(mapStateToProps)(PostsShowRedux)