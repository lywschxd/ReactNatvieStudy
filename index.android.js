/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var THUMB_URLS = [
  {"name": "1", "data":'http://n.sinaimg.cn/transform/20151015/nY5B-fxivscc0063578.jpg'}, 
  {"name": "2", "data":'http://i2.hexunimg.cn/2015-04-07/174742774.jpg'}, 
  {"name": "3", "data":'http://img.sc115.com/hb/yl1/14/881509281422534.jpg'}, 
  {"name": "4", "data":'http://img5.duitang.com/uploads/item/201408/17/20140817003216_zaSjR.thumb.700_0.jpeg'}, 
  {"name": "5", "data":'http://pic16.nipic.com/20111002/8445207_103736479150_2.jpg'}, 
  {"name": "6", "data":'http://pic18.nipic.com/20120105/9208838_174618173125_2.jpg'}, 
  {"name": "7", "data":'http://upload.cebnet.com.cn/2014/1217/1418776413348.jpg'}, 
  {"name": "8", "data":'http://img4.cache.netease.com/photo/0003/2015-01-23/AGM839D600AJ0003.jpg'}, 
  {"name": "9", "data":'http://i3.hexunimg.cn/2015-04-07/174742772.jpg'}, 
  {"name": "10", "data":'http://img6.cache.netease.com/photo/0003/2015-09-23/B46B20NA00AJ0003.jpg'}, 
  {"name": "11", "data":'http://upload.ct.youth.cn/2015/0315/1426384319649.jpg'}, 
  {"name": "12", "data":'http://pic.yeskycom/uploadImages/2015/253/22/U5WE7L9QR4WR.JPG'}
  ];

var {
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  Image,
  ListView,
  ToastAndroid,
  TouchableOpacity,
  ProgressBarAndroid,
  ScrollView,
  TextInput,
  ToolbarAndroid,
  View,
} = React;

var component = React.createClass({
  getInitialState:function() {
      return {
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      };
  },
  componentDidMount: function() {
    this.setState(
      {dataSource: this.state.dataSource.cloneWithRows(THUMB_URLS),
        imageUri:"http://www.people.com.cn/mediafile/pic/20141202/99/320321380562735367.jpg"
    }); 
  },
  navigationView: function() {
      return (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <TouchableOpacity onPress={this._onPressButton.bind(this, rowData)}><Text style={styles.listItem}>{rowData.name}</Text></TouchableOpacity>}
              style={styles.listView}
            ></ListView>
        );
  },
  _onPressButton:function(rowData) {
//      ToastAndroid.show('This is a onPress'+rowData.name, ToastAndroid.LONG);
        this.setState({imageUri:rowData.data})
  },
  _onActionSelected:function(position) {
      ToastAndroid.show('ToolbarAndroid choose :' + position, ToastAndroid.SHORT);
  },
  render: function() {
    return (
      <DrawerLayoutAndroid 
      renderNavigationView={this.navigationView}
        drawerWidth={100}  
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      >
        
        <Image source={{uri:this.state.imageUri}} style={styles.image}/>
        <ProgressBarAndroid styleAttr="Inverse" />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <ScrollView horizontal={true} contentInset={{top: -50}} style={[styles.scrollView, styles.horizontalScrollView]}>
            <Image style={styles.img} source={{uri:THUMB_URLS[1].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[1].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[2].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[3].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[4].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[5].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[6].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[7].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[8].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[9].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[10].data}} />
            <Image style={styles.img} source={{uri:THUMB_URLS[11].data}} />
        </ScrollView>
      </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image:{
    alignItems: 'center',
    width:200,
    height:100,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  listItem:{
    fontSize:32
  },
  img: {
    width: 104,
    height: 104,
  }
});

AppRegistry.registerComponent('component', () => component);
