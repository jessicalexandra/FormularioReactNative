


import { DevSettings, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';


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
    const onsubmit=(data)=>{
      console.log(data);//objeto
      //desustructrurar el objeto 
      const{fullname,email,phone,password,age}=data;
      console.log(fullname)
      //limpiar el formulario
      reset();
    }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
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
      {errors.fullname?.type== 'required' && <Text style={{color:'red'}}>Nombre es obligatorio.</Text>}
      {errors.fullname?.type== 'maxLength' && <Text style={{color:'red'}}>Nombre debe tener maximo 30 carateres.</Text>}
      {errors.fullname?.type== 'minLength' && <Text style={{color:'red'}}>Nombre debe tener minimo 2 carateres.</Text>}
      {errors.fullname?.type== 'pattern' && <Text style={{color:'red'}}>Nombre  permite solo letras.</Text>}
      <Button  style={{marginTop:20}}icon="send" mode="contained" onPress={handleSubmit(onsubmit)}>
      Enviar
      </Button>
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
