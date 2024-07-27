<template>
    <div>
      <form @submit.prevent="submitForm">
        <input v-model="firstName" placeholder="First Name" required class="input-field" />
        <input v-model="lastName" placeholder="Last Name" required class="input-field" />
        <input v-model="email" placeholder="Email" required class="input-field" />
        <button type="submit" class="btn">{{ buttonText }}</button>
      </form>
      <button @click="goBack" class="btn btn-secondary">Back</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      contact: {
        type: Object,
        default: () => ({}),
      },
      buttonText: {
        type: String,
        default: 'Submit',
      },
    },
    data() {
      return {
        firstName: this.contact.firstName || '',
        lastName: this.contact.lastName || '',
        email: this.contact.email || '',
      };
    },
    methods: {
      submitForm() {
        if (this.firstName && this.lastName && this.email) {
          this.$emit('submit', {
            id: this.contact.id || Date.now(),
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
          });
        } else {
          alert('Please fill in all fields.');
        }
      },
      goBack() {
        this.$router.back();
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    margin-bottom: 10px;
    padding: 10px;
    width: calc(100% - 22px);
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    background-color: #28a745;
    border: none;
  }
  
  .btn-secondary {
    background-color: #6c757d;
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  </style>
  