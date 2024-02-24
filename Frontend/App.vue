<script setup>
import {ref} from 'vue'
new Vue({
    el: '#app',
    data: {
        username: '',
        password: ''
    },
    methods: {
        login() {
            // Bu kısımda login işlemleri gerçekleştirilebilir.
            // Örneğin, API çağrısı yapılabilir veya yerel depolamada kullanıcı bilgileri kontrol edilebilir.
            // Bu sadece basit bir örnek olduğu için gerçek bir oturum yönetimi yapılmamıştır.
            alert('Giriş başarılı! Kullanıcı adı: ' + this.username + ', Şifre: ' + this.password);
        }
    }
});

const count = ref(0)
</script>

<template>
  <h1>Hello Vue 3</h1>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
