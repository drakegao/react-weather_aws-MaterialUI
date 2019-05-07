import { connect, } from 'react-redux';
import singleWeatherActions from '../../actions/single-weather-action';
import weatherSelector from '../../selectors/weather-selector';
import { bindActionCreators } from 'redux';
import toJS from '../../toJS';
import SingleWeatherCard from './single-weather-card';

const mapStateToProps = (state) => ({
});
const matchDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        setHasDetail: singleWeatherActions.setHasDetail
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(toJS(SingleWeatherCard));