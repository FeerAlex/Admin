const works = {
    state: {
      data: []
    },
    getters: {
        works(state) {
        return state.data
      }
    },
    mutations: {
      addNewWork(state, work) {
        state.data.push(work);
      },
    },
    actions: {
      fetchWorks({ state }) {
        return fetch("/src/works.json")
          .then(res => {
            return res.json();
          })
          .then(data => {
            state.data = data;
          });
      }
    }
  }
  
  export default works