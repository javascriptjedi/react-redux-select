import { bindActionCreators } from 'redux-select'

export default function wrapActionCreators(actionCreators) {
  return dispatch => bindActionCreators(actionCreators, dispatch)
}
