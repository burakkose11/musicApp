import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    // backgroundColor: 'green',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
  },
  year: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  content_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sold_out_cont: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  sold_out_title: {
    color: 'red',
    padding: 3,
    fontSize: 12,
  },
});
