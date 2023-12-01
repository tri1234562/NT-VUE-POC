<template>
  <div class="register-container">
    <form @submit.prevent="validate" class="form">
      <div class=""><h1 class="title">Sign Up</h1></div>
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" />
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" />
      </div>

      <div>
        <label for="password">Email:</label>
        <input type="email" v-model="email" />
      </div>

      <div v-if="errors.length > 0" class="error-message">
        {{ errors }}
      </div>

      <div class="btn-section-wrapper">
        <button type="submit" class="submit-button">Submit</button>
        <button type="button" class="navigate-button">
          <router-link class="link" to="/login">
            Already have account
          </router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: "",
    };
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.getters.getUsers);

    const saveData = (payload) => {
      store.dispatch("signup", payload);
    };

    return {
      users,
      saveData,
    };
  },
  methods: {
    handleSubmit() {
      window.alert(
        ` Your Name: ${this.username}, 
        Your Password: ${this.password},
        Your Email: ${this.email}`
      );
      const payload = {
        userName: this.username,
        password: this.password,
        email: this.email,
      };
      this.saveData(payload);
      this.username = "";
      this.email = "";
      this.password = "";
      this.$router.push("/login");
    },
    validate() {
      this.errors = "";
      if (!this.username || !this.password || !this.email) {
        this.errors = "All fields are required.";
      } else {
        this.handleSubmit();
      }
    },
  },
};
</script>

<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
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
.link {
  text-decoration: none;
  color: black;
}
.error-message {
  color: red;
  margin-bottom: 15px;
}
</style>
