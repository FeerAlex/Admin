import {HTTP} from '../../http-common';
import qs from 'qs';

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
        let data = new FormData();
        data.append('name', work.name);
        data.append('tech', work.tech);
        data.append('link', work.link);
        data.append('image', work.img);

        HTTP.post(`api/works`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          // console.log(res);
          // state.data = res.data.works;
        })
        .catch(e => {
          console.log(e);
        })
      },
    },
    actions: {
      fetchWorks({ state }) {
        return HTTP.get(`api/works`, state.data)
          .then(res => {
            state.data = res.data.works;
          })
          .catch(e => {
            console.log(e);
          })
      }
    }
  }
  
  export default works