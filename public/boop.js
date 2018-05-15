
let pageObj = {
  headerName: 'The Flower Journal',
  byLine: 'Create Account'
};

let headerUpdate = document.getElementById('theheader');
headerUpdate.textContent = pageObj.headerName;
let emailDetail = document.getElementById('headerDetail');
emailDetail.textContent = pageObj.byLine;
