import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);
  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    console.log(filePath.value);
    const fileRef = projectStorage.ref(filePath.value);
    console.log(fileRef);
    try {
      const response = await fileRef.put(file);
      url.value = await response.ref.getDownloadURL();
      return url.value;
    } catch (err) {
      error.value = err.message
        .replace("Firebase: ", "")
        .replace(/\(auth.*\)\.?/, "");
    }
  }
  return { uploadFile, url, filePath, error };
};

export default useStorage;
