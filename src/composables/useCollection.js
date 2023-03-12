import { ref } from "vue";
import { projectFireStoreCore } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);
  async function addRecord(record) {
    error.value = null;
    try {
      const response = await projectFireStoreCore.collection(name).add(record);
      return response;
    } catch (err) {
      error.value = err.message
        .replace("Firebase: ", "")
        .replace(/\(auth.*\)\.?/, "");
    }
  }
  return { addRecord, error };
};

export default useCollection;
