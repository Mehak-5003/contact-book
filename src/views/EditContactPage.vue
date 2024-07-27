<template>
    <div v-if="contact">
      <h1>Edit Contact</h1>
      <ContactFormComponent :contact="contact" @submit="updateContact" buttonText="Update" />
    </div>
  </template>
  
  <script>
  import ContactFormComponent from '../components/ContactFormComponent.vue';
  
  export default {
    components: {
      ContactFormComponent,
    },
    data() {
      return {
        contact: null,
      };
    },
    created() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(c => c.id === parseInt(this.$route.params.id));
    },
    methods: {
      updateContact(updatedContact) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const index = contacts.findIndex(c => c.id === updatedContact.id);
        contacts.splice(index, 1, updatedContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'ContactDetailPage', params: { id: updatedContact.id } });
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
  