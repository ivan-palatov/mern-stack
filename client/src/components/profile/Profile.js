import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getProfileByHandle } from '../../actions/profileActions';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/spinner';

class Profile extends Component {
    componentDidMount() {
        if (this.props.match.params.handle) { //содержит handle из ссылки
            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }

    render() {
        return (
            <div>
                <ProfileHeader />
                <ProfileAbout />
                <ProfileCreds />
                <ProfileGithub />
            </div>
        );
    }
}

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);