# react-native-scrolltotop
a RN component make list come back to top. (一个使列表回到顶部的RN组件)

### IOS && ANDROID
![scrolltotop ios preview](http://i.imgur.com/FeNTNJw.gif)
－－－
![scrolltotop android preview](http://i.imgur.com/TcVs6Hn.gif)

### Installation
```
npm install --save react-native-scrolltotop
```

### Usage example
see the example/example.js for a more detailed example.
```javascript
import ScrollTopView from 'react-native-scrolltotop';

  //first set default state in your constructor
  constructor(props) {
    //...
    this.state = {
      isShowToTop: false,
    };
  }
  
  //then bind a method to detect the scroll distance of your listView
  //set ref with 'listview'
  <ListView
        ref="listview"
        onScroll={(e)=>this._onScroll(e)} 
        style={styles.listView} 
        renderScrollComponent={(props)=>{
            return <ScrollView style={styles.ViewPort} {...props}/>
        }}/>
  
  //here is the _onScrol method
  _onScroll(e) {
    var offsetY = e.nativeEvent.contentOffset.y;

    if(offsetY > 100) {
        this.setState({
            isShowToTop: true
        })
    } else {
        this.setState({
            isShowToTop: false
        })
    }
  }

//use it with your listView together
  <View style={{flex:1}}>
    <View style={styles.header}>
      <Text style={styles.headerText}>消息列表</Text>
    </View>
    {listView}
    {this.state.isShowToTop?<ScrollTopView root={this} ></ScrollTopView>:null}
  </View>
```

### Props

Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
root | | require | | current component
width           | number | Yes      | 60        | use in both the button and the image if you have
height          | number | Yes      | 60        | use in both the button and the image if you have
bgColor         | string | Yes      | '#099fde' | backgroundColor of button，
isRadius        | bool   | Yes      | true      | whether need a borderRadius of your button
bdRadius        | number | Yes      | 30        | borderRadius of your button
left            | number | Yes      | Dimensions.get('window').width - 80        | distance from the left
top             | number | Yes      | Dimensions.get('window'.height - 160        | distance from the top
#### use Text
Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
color           | string | Yes      | '#ffffff' | color of your text
fontSize        | number | Yes      | 12        | fontSize of your text
#### use Image
Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
width           | number | Yes      | 60           | same with button
height          | number | Yes      | 60           |  same with button
imageUri        | string | Yes      | a base64 img | uri of your Image

if it is useful to you, let me know or star it :smile:.
