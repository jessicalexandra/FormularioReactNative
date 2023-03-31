ssscdsdfsadasdcgsacdgasdsfdasfdassssss
savdghasfgdfsagdfsa
asdasdas
asdasdasasd
asdasdsadsad
sadbvsabdv
hagdsh
savdghasfgdfsagdfsadfs
useDeferredValuefds
falsesdf
sadbvsabdvfds
FileSystemDirectoryEntryfd
ssscdsdfsadasdcgsacdgasdsfdasfdassssssdf
ssscdsdfsadasdcgsacdgasdsfdasfdassssssds
FileSystemDirectoryEntryf
DevSettingsfds
fds

import { DevSettings, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

// libreria de validaciones

import { useForm, Controller } from "react-hook-form";
import { useDeferredValue } from 'react'
export default function App() {

  // definiciones del formulario con sus respetivos  estados,errores, etc 
  
    const { control, handleSubmit,reset, formState: { errors } } = useForm({
      defaultValues: {
        fullname: '',
        email: '',
        phone: '',
        password: '',
        age: '',

      }
    });
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
         label="Nombre completo"
         mode='outlined'
         left={<TextInput.Icon icon="account"/>}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname && <Text>This is required.</Text>}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
