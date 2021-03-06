// Copyright 2018 JsOS project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const mkimg = require('../mkimg');

/* const multipliers = {
  'B': 0.001,           // byte
  'K': 1,               // kilobyte
  'M': 1000,            // megabyte
  'G': 1000000,         // gigabyte
  'T': 1000000000,      // terabyte
  'P': 1000000000000,   // petabyte
  'E': 1000000000000000 // exabyte
};
const letterRegex = /[A-Za-z]/; */

/* function toKB(size) {
  let suffix = size.substr(size.length - 1);
  if (!letterRegex.test(suffix)) suffix = 'B';
  return parseInt(size, 10) * multipliers[suffix.toUpperCase()];
} */

module.exports = function(args, cb) {
  if (args._.length === 0) {
    args._[0] = 'jsos-hd0.img';
  }

  const filename = String(args._[0]);

  const size = args.size || 32;
  // let sizeInKb = toKB(size);
  // if (sizeInKb < 33792) {
  //   return cb('invalid size for FAT32. minimum limit of 33792 kb (~33 mb)');
  // }

  // let label = String(args.label).toUpperCase(); // valid names for FAT volumes are upper case

  mkimg({
    size,
    filename
    // label
  }, cb);
};
