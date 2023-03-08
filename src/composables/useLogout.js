import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    error.value = err.message
      .replace("Firebase: ", "")
      .replace(/\(auth.*\)\.?/, "");
  }
}

export function useLogout() {
  return { error, logout };
}
