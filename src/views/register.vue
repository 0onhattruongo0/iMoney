<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="iMoney"
              id="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              type="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              id="email"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
