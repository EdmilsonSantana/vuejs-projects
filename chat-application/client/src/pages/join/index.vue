<template>
  <v-section color="black" full>
    <v-form @submit.prevent.native="join(room, username)">
        <v-form-group class="form__group">
          <v-text-field large placeholder="Room" v-model="room" />
        </v-form-group>
        <v-form-group class="form__group">
          <v-text-field large placeholder="Username" v-model="username" />
        </v-form-group>
        <v-form-group class="form__group">
          <v-button large :disabled="!isValid">
            Join
          </v-button>
        </v-form-group>
     </v-form>
  </v-section>
</template>

<script>
  import VSection from '@/components/section/section';
  import VForm from '@/components/form/form';
  import VFormGroup from '@/components/form/form-group';
  import VTextField from '@/components/text-field/text-field';
  import VButton from '@/components/button/button';
  
  export default {
    data() {
      return {
        room: null,
        username: null,
      };
    },
    computed: {
      isValid() {
        let isValid = true;
        if (!this.room || !this.username) {
          isValid = false;
        }
        return isValid;
      },
    },
    methods: {
      join(room, username) {
        if (this.isValid) {
          this.$store.dispatch('join', { username, room });
        }
      },
    },
    components: {
      VSection,
      VForm,
      VFormGroup,
      VTextField,
      VButton,
    },
  };
</script>
