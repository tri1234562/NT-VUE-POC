<template>
  <div class="login-container">
    <form @submit.prevent="validate" class="login-form">
      <div class=""><h1 class="title">Login</h1></div>
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" @input="clearError" />
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" @input="clearError" v-model="password" />
      </div>

      <div v-if="errors.length > 0" class="error-message">
        {{ errors }}
      </div>

      <div class="btn-section-wrapper">
        <button type="submit" class="submit-button">Submit</button>
        <button type="button" @click="navigateToSignup" class="navigate-button">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const users = store?.getters.getUsers;
    return {
      users,
    };
  },
  data() {
    return {
      username: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    login() {
      const payload = {
        username: this.username,
        password: this.password,
      };

      const user = this.users?.find(
        (item) =>
          item.userName === payload?.username &&
          item.password === payload.password
      );
      (this.username = ""), (this.password = "");

      if (user) {
        window.alert("LOGIN COMPLETED");
      } else {
        window.alert("LOGIN FAILED");
      }
    },
    navigateToSignup() {
      this.$router.push("/register");
    },
    validate() {
      this.errors = "";
      if (!this.username || !this.password) {
        this.errors = "Username and password are required.";
      } else {
        this.login();
      }
    },
    clearError() {
      this.errors = "";
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.btn-section-wrapper {
  display: flex;
  justify-content: center;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.navigate-button {
  background-color: #fff;
  margin-left: 8px;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
}
.error-message {
  color: red;
  margin-bottom: 15px;
}
</style>
