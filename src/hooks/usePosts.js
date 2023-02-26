import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePosts(pageLimit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const fetchingPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: pageLimit,
          },
        }
      );
      totalPages.value = Math.ceil(
        response.headers["x-total-count"] / pageLimit
      );
      posts.value = response.data;
    } catch (e) {
      // alert("Something is wrong. Please reload this page");
      console.log(e);
    } finally {
      isPostsLoading.value = false;
    }
  };
  onMounted(fetchingPosts);
  return {
    posts,
    totalPages,
    isPostsLoading,
  };
}
