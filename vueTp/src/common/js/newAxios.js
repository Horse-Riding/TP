import axios from 'axios';
let vuehttp;
if (typeof axios.create === 'function') {
  vuehttp = axios.create({
    baseURL: 'http://web.thinkphp.com/index.php/index/',
    // transformRequest: [function (data) {
    //   data = Qs.stringify(data);
    //   return data;
    // }],
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
}
function aget(url, params) {
  let _url = url;
  return new Promise((resolve, reject) => {
    // console.log(params);
    vuehttp.get(_url, params).then(function (response) {
      resolve(response.data);
    })
      .catch(function (err) {
        reject(err);
      });
  });
}

function apost(url, params) {
  let _url = url;
  return new Promise((resolve, reject) => {
    vuehttp.post(_url, params).then(function (response) {
      // console.log(response);
      resolve(response.data);
    })
      .catch(function (err) {
        reject(err);
      });
  });
};

function aput(url, params) {
  let _url = url;
  return new Promise((resolve, reject) => {
    vuehttp.put(_url, params).then(function (response) {
      // console.log(response);
      resolve(response.data);
    })
      .catch(function (err) {
        reject(err);
      });
  });
};

function adelete(url, params) {
  let _url = url;
  return new Promise((resolve, reject) => {
    vuehttp.delete(_url, params).then(function (response) {
      // console.log(response);
      resolve(response.data);
    })
      .catch(function (err) {
        reject(err);
      });
  });
};

export default {
  aget,
  apost,
  aput,
  adelete,
  vuehttp
};
