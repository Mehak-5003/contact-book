<template>
    <div>
      <h1>Add New Contact</h1>
      <ContactFormComponent @submit="addContact" buttonText="Add" />
    </div>
  </template>
  
  <script>
  import ContactFormComponent from '../components/ContactFormComponent.vue';
  
  export default {
    components: {
      ContactFormComponent,
    },
    methods: {
      addContact(contact) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contact.id = Date.now();
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'ContactDetailPage', params: { id: contact.id } });
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  </style>
  