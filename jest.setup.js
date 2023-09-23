// jest.setup.js

// Import the 'text-encoding' package
import TextEncoding from "text-encoding";

// Polyfill 'TextEncoder' and 'TextDecoder' for Node.js
global.TextEncoder = TextEncoding.TextEncoder;
global.TextDecoder = TextEncoding.TextDecoder;
