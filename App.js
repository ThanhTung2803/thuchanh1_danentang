import { StatusBar } from 'expo-status-bar';
import {ScrollView ,StyleSheet, Text, View,Button,TextInput} from 'react-native';
import { useState } from 'react';
import PersonList from './src/danhsach';

export default function App() {
  const [switchState,setSwitchState] =  useState(false);

  return (
    <View style={styles.container}>
      <Text>Họ và tên : Phạm Thanh Tùngg</Text>
      <Text>MSV: PH26999</Text>
      <Button
      title='Thêm mới'
      onPress={()=> setSwitchState(!switchState)}
      />
      {
        switchState
        ?
        <>
        <Text>Sub Screen </Text>
        <TextInput>Tên :</TextInput>
        <TextInput>Mô tả :</TextInput>
        <TextInput>Link ảnh :</TextInput>
          <View style = {styles.horizontalCon}>
            <Button style={styles.subButton}
               title="Hủy"
            />
              <Button style={styles.subButton}
                title="Lưu"
            />
          </View>
        </>
        :
        null
      }
      <PersonList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300
  },

  horizontalCon: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  
  subButton: {
    flex: 1,
    margin: 10,
  },
},
);


