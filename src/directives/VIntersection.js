export default {
  mounted(el, binding) {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    // eslint-disable-next-line no-unused-vars
    const callback = (entries, observer) => {
      // console.log(observer);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          binding.value();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: "intersection",
};
