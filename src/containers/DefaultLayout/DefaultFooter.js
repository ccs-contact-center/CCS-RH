import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import "moment/locale/es";
var now = new Date();
var fecha = moment.utc(now).format("YYYY");

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="http://www.ccscontactcenter.com">CCS</a> &copy; {fecha} Isaac Contreras</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
