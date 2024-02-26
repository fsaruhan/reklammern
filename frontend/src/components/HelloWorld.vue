<template>
  <div class="form-container">
    <h2>Kayıt Ol</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Username:</label>
        <input type="text" id="username" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">E-posta:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="password">Şifre:</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
  </div>
</template>


<style>
/* Form Container */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Form Header */
.form-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* Form Labels */
.form-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* Form Input Fields */
.form-container input[type="text"],
.form-container input[type="email"],
.form-container input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box; /* Ensure input width includes padding and border */
}

/* Submit Button */
.form-container button[type="submit"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

/* Submit Button Hover Effect */
.form-container button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Error Messages */
.error-message {
  color: red;
  margin-top: 5px;
}
</style>


<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/api/auth/signup")
      console.log('Form Gönderildi!', this.formData);
    }
  }
};
</script>

