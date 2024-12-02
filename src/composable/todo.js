import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useTasks() {
  const tasks = ref([]);
  const task = ref([]);
  const router = useRouter();
  const error = ref([]);

  const gettasks = async () => {
    const response = await axios.get("todo");
    tasks.value = response.data.data;
  };
  const gettask = async (id) => {
    const response = await axios.get("todo/" + id);
    task.value = response.data.data;
  };
  const storetask = async (data) => {
    try {
      await axios.post("todo", data);
      await router.push({ name: "ToDo" });
    } catch (error) {
      if ((error.response.status = 422)) {
        error.value = error.response.data.errors;
      }
    }
  };
  const updatetask = async (id, value) => {
    try {
      await axios.put("todo/" + id, value.data);
      await router.push({ name: "ToDo" });
    } catch (error) {
      if ((error.response.status = 422)) {
        error.value = error.response.data.errors;
      }
    }
  };

  const destroy = async (id) => {
    await axios.delete("todo/" + id);
    await gettasks();
  };

  return {
    task,
    tasks,
    error,
    gettasks,
    gettask,
    storetask,
    updatetask,
    destroy,
  };
}
