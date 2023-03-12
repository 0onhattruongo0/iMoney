<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-8">
      <div class="bg-white round-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                  id="total"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="w-10 text-right leading-10 mr-4 flex items-center flex-none"
              >
                <span
                  class="inline-block ml-auto rounded-full w-8 h-8 bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                  id="category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                  id="note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="showDetails"
      >
        More Details
      </button>
    </div>
    <!-- Start: Advanced Form -->
    <div v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white round-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select a location"
                    id="location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withperson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person"
                    id="withperson"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-8">
        <div class="bg-white round-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1py-2">
                  <div class="w-full text-primary font-semibold">
                    Upload File
                  </div>
                  <input
                    id="file"
                    type="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red my-3">{{ errorFile }}</div>
      </div>
    </div>
    <button type="submmit">Test</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStogare";
export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transaction");
    const { uploadFile, url } = useStorage("transaction");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const location = ref("");
    const person = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);
    function showDetails() {
      isMoreDetails.value = true;
    }
    function onChangeFile(e) {
      const selected = e.target.files[0];
      const tylesFile = ["image/png", "image/jpeg"];
      if (selected && tylesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select a file type png or jpg";
      }
    }
    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      console.log(file.value);
      console.log(url);
      const { user } = getUser();
      const transaction = {
        total: total.value,
        category: category.value,
        note: note.value,
        location: location.value,
        person: person.value,
        time: time.value,
        userId: user.value.uid,
        thumbnail: url,
      };
      console.log(transaction);
      await addRecord(transaction);
      console.log(error);
      // console.log("Created");
    }
    return {
      total,
      category,
      note,
      time,
      onSubmit,
      isMoreDetails,
      showDetails,
      onChangeFile,
      errorFile,
      location,
      person,
    };
  },
};
</script>
