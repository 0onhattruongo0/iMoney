<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              type="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              id="email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              id="password"
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign In
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <div class="text-left text-red mt-4" v-if="error">
        <span>{{ error }}</span>
      </div>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "home", params: {} });
    }
    return { onSubmit, error, isPending, email, password };
  },
};
</script>
