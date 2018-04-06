import React, {Component} from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_theme_detail_request } from './../actions/index';

class ThemeDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.fetch_theme_detail(id);
    }
    
    render() {
        let { detail } = this.props;
        return (
            <h1>Theme Detail Container</h1>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        detail : state.theme_detail.theme_detail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_theme_detail: (theme_id) => {
            dispatch(fetch_theme_detail_request(theme_id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetailContainer);
