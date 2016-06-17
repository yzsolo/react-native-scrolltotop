/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';

import Platform from 'Platform';

//加载更多View组件
import FooterView from './components/LoadMoreRefreshView';

//回到顶部组件
import ScrollTopView from './components/ScrollToTop';

class AresRn extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9']),
      isShowToTop: false,
      isReFresh: false
    };
  }

  _listView() {
    /*
     * android，ios都使用原生下拉刷新组件：
     */
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderFooter={this._renderFooter.bind(this)}
        renderRow={this.rowRender.bind(this)}
        onEndReachedThreshold = {10}
        ref="listview"
        onScroll={(e)=>this._onScroll(e)} 
        style={styles.listView} 
        renderScrollComponent={(props)=>{
            return <ScrollView style={styles.ViewPort} {...props}/>
        }}
        refreshControl={
            <RefreshControl
                refreshing={this.state.isReFresh}
                onRefresh={this.PullDownRefresh.bind(this)}
                colors={['#ffffff', '#ffffff', '#ffffff']}
                progressBackgroundColor="#099fde"/>
        }/>
    );
  }

  PullDownRefresh() {
    let self = this;
    this.setState({
      isReFresh: true
    });

    setTimeout(function() {
      self.setState({
        isReFresh: false
      })
    }, 2000); 
  }

  render() {
    let listView = this._listView();
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>消息列表</Text>
        </View>
        {listView}
        {this.state.isShowToTop?<ScrollTopView root={this} ></ScrollTopView>:null}
      </View>
    );
  }

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

  rowRender(data) {
    return (
      <View style={styles.container}>
        <Text>{data}</Text>
      </View>
    );
  }

  _renderFooter() {
    return (<FooterView></FooterView>)
  }

}

const styles = StyleSheet.create({
  header: {
    height : 50,
    paddingTop:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor : '#099fde'
  },
  headerText: {
    color: '#ffffff'
  },
  container: {
    flex: 1,
    height:74,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#cccccc',
  }
});

AppRegistry.registerComponent('AresRn', () => AresRn);
