var app = new Vue(
  {
    el: "#app",
    data: {
      filmTitle: "",
      filmList: []
    },
    methods: {
      search: function() {
        axios.get('https://api.themoviedb.org/3/search/multi', {
          params: {
            api_key: "9e72b56abf296104112753fe36a0742f",
            query: this.filmTitle,
            language: "it-IT",
          }
        })
        .then((response) => {
          this.filmList = response.data.results;
        })
        this.filmTitle = "";
      }
    }
  }
);
