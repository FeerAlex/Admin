import {HTTP} from '../../http-common';
import qs from 'qs';

const skills = {
  state: {
    data: []
  },
  getters: {
    skills(state) {
      return state.data
    }
  },
  mutations: {
    addNewSkill(state, skill) {
      state.data.push(skill);
    },
    removeExistedSkill(state, skillID) {
      state.data = state.data.filter(item => item.id != skillID)
    },
    updateExistedSkill(state, skill) {
      state.data = state.data.map(function(el) {
        if(el._id == skill.skillID) {
          el.percents = skill.percents;
        }
        return el;
      })
    },
  },
  actions: {
    fetchSkills({ state }) {
      return HTTP.get(`api/skills`)
        .then(res => {
          state.data = res.data.skills;
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateSkills({ state }) {
      HTTP.put(`api/skills`, state.data)
      .then(res => {})
      .catch(e => {
        console.log(e);
      })
    }
  }
}

export default skills