<template>
    <div>
      <h1>Contact Book</h1>
      <ContactListView />
      <router-link to="/add" class="btn btn-primary">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  import ContactListView from '../components/ContactListView.vue';
  
  export default {
    components: {
      ContactListView,
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px 0;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #007bff;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  