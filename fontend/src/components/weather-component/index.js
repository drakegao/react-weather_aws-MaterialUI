import { connect, } from 'react-redux';
import weatherActions from '../../actions/weather-action';
import weatherSelector from '../../selectors/weather-selector';
import { bindActionCreators } from 'redux';
import toJS from '../../toJS';
import Weather from './weather';

const mapStateToProps = (state) => ({
    weatherData: weatherSelector.getWeatherState(state),
    status: weatherSelector.getWeatherStatus(state)
});
const matchDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
       getWeatherData: weatherActions.getWeatherData,
       setWeatherStatus: weatherActions.setWeatherStatus
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(toJS(Weather));