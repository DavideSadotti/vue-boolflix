var app = new Vue(
  {
    el: "#app",
    data: {
      filmTitle: "",
      filmList: []
    },
    methods: {
      search: function(){
        axios.get('https://api.themoviedb.org/3/search/multi', {
          params: {
            api_key: "9e72b56abf296104112753fe36a0742f",
            query: this.filmTitle,
            language: "it-IT",
          }
        })
        .then((response) => {
          this.filmList = response.data.results;
          this.voto();
        })
        this.filmTitle = "";
      },
      // NON FA
      // voto: function(){
      //   this.filmList.forEach((item) => {
      //     var voti = (item.vote_average / 2).toFixed();
      //     item.vote_average = voti;
      //   });
      // },
      voto: function(item){
        // return (item / 2).toFixed()
        const newVote = (item / 2).toFixed();
        return parseInt(newVote);
      }
    }
  }
);
