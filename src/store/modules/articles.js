import {HTTP} from '../../http-common';
import qs from 'qs';

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
      HTTP.post(`api/blog`, qs.stringify({
        title: article.title,
        date: article.date,
        desc: article.desc
      }))
      .then(res => {
        if(res.status === 201) {
          state.data.push(article);
        }
      })
      .catch(e => {
        console.log(e);
      })
    },
  },
  actions: {
    fetchArticles({ state }) {
      return HTTP.get(`api/blog`)
        .then(res => {
          state.data = res.data.articles;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}

export default articles