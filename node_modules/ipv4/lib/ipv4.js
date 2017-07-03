/* ================================================================
 * ipv4 by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Jun 04 2014 12:33:02 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var network = require('os').networkInterfaces()

for (var n in network) {
  var ipv4 = network[n].filter(function(i) {
    return i.family === 'IPv4' && !i.internal
  })

  if (ipv4.length) {
    module.exports = ipv4[0].address
    return
  }
}

// Fallback
module.exports = '0.0.0.0'
