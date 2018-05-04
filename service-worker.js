/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/09/06/First-Artical/index.html","601c485e154a88951e7ec603a1d7c452"],["/2017/09/06/模块化/index.html","888a6cc724cffdae40f2b6cab374d0f6"],["/2017/09/07/组件化/index.html","1e4ccf5c502fcd8475d72a093cd7ef64"],["/2017/09/08/常用黑科技/index.html","784c281c66c0d9796a064046e5dc2be1"],["/2017/09/19/fixed背景图固定兼容性bug/index.html","b7e22fcc29f79a05c2d16bcfd42771de"],["/2017/09/19/三栏布局/index.html","9cb093654dfa514496d6e138ea974305"],["/2017/09/20/es6常用特性/index.html","f0826a5836618a46901ab5c85ee7c718"],["/2017/10/25/setTimeout的总结/index.html","7ef42b28f0b39e59bf3f940094f444bc"],["/2017/10/31/浏览器的渲染原理简介/index.html","6047d6289175cad61bf4b7cd1362112d"],["/2017/11/02/node基础（上）/index.html","59d581ddd31aefb7da87a00a08116e60"],["/2017/11/10/全栈项目填坑（一）/index.html","7cbc3e64f65d5d0a529d0fdd9936dcdd"],["/2017/11/10/全栈项目填坑（三）/index.html","9aac7c407e0c5581fe54b77db38d1b9d"],["/2017/11/10/全栈项目填坑（二）/index.html","d1c5dbf41f45b0a8c4e8dda0610920d2"],["/2017/11/17/微信公众号开发（一基础配置）/index.html","dcbccaa318bb7d44642c03c9fb26e4ee"],["/2017/11/22/判断一个对象是否是数组/index.html","8d27e7ba83a0533ae367f224e6feabca"],["/2017/12/01/依赖注入/index.html","41a8ddc7c723c7c321e2dcc2b7a0ff42"],["/2017/12/04/vue响应式原理（object（数组）的坑）/index.html","4c87a68619e1e1720e447a0c3132a132"],["/2018/01/10/vue组件面向对象的应用/index.html","2bfdf4f5304242eda878b6733de1a86a"],["/2018/01/19/设计模式（创建型)/index.html","059a13d463f5be0abedf896a5d41ecbb"],["/2018/01/26/浅谈前端安全/index.html","281cf04d6bde2a5697df84ef908ac59f"],["/2018/05/04/设计模式（观察者）/index.html","8c60826c964599cdca6081a1dcedd458"],["/archives/2017/09/index.html","2fb7531d226048444c009c7306a571ab"],["/archives/2017/10/index.html","51b3aa351e1a0af372d30f3e7b53d420"],["/archives/2017/11/index.html","2cd47fd05df0708d1bae8ad743a955ac"],["/archives/2017/12/index.html","61b402e75e8802b36cf48a35271973eb"],["/archives/2017/index.html","bc9fa84d03944cc0537929bbaec63e03"],["/archives/2017/page/2/index.html","65efbb33461e800a9c389ea9e37d50ed"],["/archives/2018/01/index.html","ab0ccad54807110106c011a8d20acde2"],["/archives/2018/05/index.html","4e099438d1b481e02eabe544ffdfafd3"],["/archives/2018/index.html","2edb73f318acc4cd90227834063d3412"],["/archives/index.html","86d251d527342b7dbb42dd6856c74de8"],["/archives/page/2/index.html","f5b98ac5d2407367aae67a82e1150178"],["/archives/page/3/index.html","6d256a881c1dcbc789283d673b8f76a5"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/alipay.jpg","da4d5886a6db8b0eb68641ba4048d88b"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/icon.png","b55d6b79e5422014de213065cfff8875"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/weixinma.jpg","8100b0364455e29644e08e500d0c6d70"],["/index.html","22497972a1f5171453d05a73fc7ba7bd"],["/main.507b3a.css","b9b1413784cad584eefbdf1c03117359"],["/main.507b3a.js","afa95507ebbb1e4fba6dacf2c04adb02"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","261c917d604ecf492bd0a3f4328131d3"],["/page/3/index.html","584373d97129082598458314baf72cac"],["/slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["/tags/node/index.html","b89d1b62bf781a6785e869d560f9f1c6"],["/tags/node开发/index.html","a2ad11fcabbd49eb3b962173f856578f"],["/tags/前端/index.html","8bfb0607d10e16309bd5d68fe9ba77ef"],["/tags/前端/page/2/index.html","f2424fda32c09a8739886c3179ed4a58"],["/tags/前端安全/index.html","c9a02e921a6ab2482b81dbe796ab4869"],["/tags/前端开发/index.html","a66c76788361dc1d15a26e844423d4ce"],["/tags/随笔/index.html","cbf582352a9fdccd0ce573c4db12b1aa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







