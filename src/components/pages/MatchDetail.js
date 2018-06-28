import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { loginStyle, profileStyle } from '../styles/styles';
import { Card, InputDetial, Divider } from '../reusable';
import DetailCestovne from '../ui/Details/DetailCestovne';
import { profileUpdate } from '../../redux/actions';
import { createRefereeName, parseDate } from '../../utils/Utils';
import DetailZapas from '../ui/Details/DetailZapas';
import { Content } from 'native-base';

const width = Dimensions.get('window').width;

class MatchDetail extends PureComponent {
  render() {
    return (
      <Content style={{ margin: 15 }}>
        <DetailZapas {...this.props} />
        <DetailCestovne />
      </Content>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  const { editable, meno, rozhodca, liga, mesto, auto, email } = profile;

  return {
    editable,
    meno,
    rozhodca,
    liga,
    mesto,
    auto,
    email
  };
};

export default connect(mapStateToProps, { profileUpdate })(MatchDetail);
