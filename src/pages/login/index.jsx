import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './style.less'

export default class Index extends Component {

    componentWillMount () { }

    componentDidMount () {

    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    config = {
        navigationBarTitleText: '登陆'
    }

    render () {
        return (
            <View className='index'>
                <Text></Text>
            </View>
        )
    }


}
