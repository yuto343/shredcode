export const state = () => ({
    page: 'index',
    // firstview:true,
    index:false,
    about:false,
    works:false,
    contact:false,
    killed: false
  })
  
  export const getters = {
    // firstview: state => state.firstview,
    page: state => state.page,
    index: state => state.index,
    about:state => state.about,
    works:state => state.works,
    contact:state => state.contact,

   
    killed: state => state.killed
  }
  
  export const mutations = {
    updatePage (state,pageName) {
      state.page = pageName
    },
    // firstview (state) {
    //   state.firstview = false
    // },
    index (state) {
      state.index = !state.index
    },
    setPage(state){
      if(state.page === "about"){
        state.about = true
        state.works = false
        state.contact = false
      }else if(state.page === "works"){
        state.about = false
        state.works = true
        state.contact = false
      }else if(state.page === "contact"){
        state.about = false
        state.works = false
        state.contact = true
      }
    }
  }
  