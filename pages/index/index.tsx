import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import {Button, Cell, Radio} from "@nutui/nutui-react-taro";
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button>121212</Button>
      <Cell title={'hahah'}>
        <View>
          <Radio.Group defaultValue="1">
            <Radio value="1">选项1</Radio>
            <Radio value="2">选项2</Radio>
            <Radio value="3">选项3</Radio>
          </Radio.Group>
          <Radio.Group defaultValue='1'>
            <Radio shape='button' disabled value='1'>
              选项1
            </Radio>
            <Radio shape='button' value='2'>
              选项2
            </Radio>
            <Radio shape='button' value='3'>
              选项3
            </Radio>
          </Radio.Group>
        </View>
      </Cell>
    </View>
  )
}
