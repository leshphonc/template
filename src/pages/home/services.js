import axios from 'axios'

export const fetchHome = () =>
  axios.get(`/appapi.php?c=Merchantapp`, {
    params: {
      ticket: localStorage.getItem('ticket'),
    },
  })

export const fetchHome2 = () =>
  axios.get('/appapi.php?c=Merchantapp&a=index', {
    params: {
      ticket: localStorage.getItem('ticket'),
    },
  })
