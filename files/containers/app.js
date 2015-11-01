import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {kik:className} from '../components/{kik:slug}';

export default connect(mapStateToProps, mapDispatchToProps)({kik:className});

function mapStateToProps(state) {
  return { example: state.example };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
