<template>
  <div>
    <input v-model="searchQuery" placeholder="Search contacts" class="search-input" />
    <ul class="contact-list">
      <ContactListItem
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contact="contact"
      />
    </ul>
  </div>
</template>

<script>
import ContactListItem from './ContactListItem.vue';

export default {
  components: {
    ContactListItem,
  },
  data() {
    return {
      searchQuery: '',
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(contact => {
          if (!contact || !contact.firstName || !contact.lastName) return false;
          const firstName = contact.firstName.toLowerCase();
          const lastName = contact.lastName.toLowerCase();
          return (
            firstName.includes(this.searchQuery.toLowerCase()) ||
            lastName.includes(this.searchQuery.toLowerCase())
          );
        })
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
};
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.contact-list {
  list-style-type: none;
  padding-left: 0;
}

.contact-list li {
  margin: 10px 0;
  font-size: 1.2em;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}
</style>
