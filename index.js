/**
 * @回到顶部
 */

 'use strict';

import React, { Component } from 'react';
import {
 	View,
 	Text,
 	Image,
 	StyleSheet,
 	TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';

let backToTopImage = 'data:image/png;base64,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';

export default class ScrollToTop extends Component {

 	render() {
 		return (
 			<TouchableOpacity onPress={this._onPress.bind(this)} style={styles.toTop}>
                <Image style={{width: 60, height: 60}} source={{uri: backToTopImage}} />
            </TouchableOpacity>
 		);
 	}

    _onPress() {
        /*
         * android，ios都使用原生下拉刷新组件：
         */
        this.props.root.refs.listview.scrollTo({x:0, y:0, animated:true});
    }
}

let styles = StyleSheet.create({
	toTop: {
        flex: 1,
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: (Dimensions.get('window').width - 80),
        top: (Dimensions.get('window').height - 160),
    },
})