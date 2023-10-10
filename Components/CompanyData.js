/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';

const CompanyData = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'pink',
      }}>
      <Text style={{fontSize: 18}}>Name : ABC Company </Text>
      <Text style={{fontSize: 18}}>Total :5000 </Text>
      <Text style={{fontSize: 18}}>Product : Beer </Text>
    </View>
  );
};
export default CompanyData;
