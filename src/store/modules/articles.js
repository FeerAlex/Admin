const articles = {
  state: {
    data: []
  },
  getters: {
    articles(state) {
      return state.data
    }
  },
  mutations: {
    addNewArticle(state, article) {
      state.data.push(article);
    },
  },
  actions: {
    fetchArticles({ state }) {
      return fetch("/src/articles.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          state.data = data;
        });
    }
  }
}

export default articles